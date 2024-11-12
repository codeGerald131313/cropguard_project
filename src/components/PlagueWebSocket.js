import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const PlagaWebSocket = () => {
  const [socket, setSocket] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(null);
  const [plagueDetails, setPlagueDetails] = useState({});

  const [records] = useState([
    {
      id: 1,
      date: "2024-09-01",
      name: "Gorgojo del Arroz",
      type: "Plaga",
      description: "Detectado en campos de arroz, causando daño a los granos almacenados.",
    },
    // Add more records as needed
  ]);

  useEffect(() => {
    const socketInstance = new WebSocket("wss://cropguardbackend-production.up.railway.app/ws/plague_updates/");
    setSocket(socketInstance);

    socketInstance.onopen = () => {
      console.log("WebSocket connection established");
    };

    socketInstance.onmessage = async (event) => {
      console.log("Message received:", event.data);
      const data = JSON.parse(event.data);

      if (data.status === "success") {
        const { class_index, predicted_class, confidence, color } = data.prediction;
        setPredictions((prevPredictions) => [
          ...prevPredictions,
          { class_index, predicted_class, confidence, color },
        ]);

        await fetchPlagaDetails(class_index);
      } else if (data.status === "error") {
        setError(data.message);
      }
    };

    socketInstance.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socketInstance.close();
    };
  }, []);

  const fetchPlagaDetails = async (id) => {
    try {
      const response = await fetch(`https://cropguardbackend-production.up.railway.app/api/plagues/${1}/`);
      const data = await response.json();
      if (data.status === "success") {
        setPlagueDetails((prevDetails) => ({
          ...prevDetails,
          [id]: data.data,
        }));
      } else {
        console.error("Error fetching plague details:", data.message);
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  return (
    <div className="container my-5 p-4 bg-light rounded">
      <div className="websocket-section mb-4">
        <h2>Predicciones en tiempo real</h2>

        {error && <p className="text-danger">{error}</p>}

        <h3>Predicciones:</h3>
        <div className="row">
          {predictions.map((prediction, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className={`p-3 rounded ${prediction.color === "red" ? "bg-danger text-white" : "bg-success text-white"}`}>
                {prediction.predicted_class} - Confianza: {prediction.confidence}%

                {plagueDetails[prediction.class_index] && (
                  <div className="mt-3 p-3 bg-white border rounded text-dark">
                    <h4>Detalles del {plagueDetails[prediction.class_index].name}</h4>
                    <div className="row">
                      <div className="col-6">
                        <p><strong>Descripción:</strong> {plagueDetails[prediction.class_index].description || 'N/A'}</p>
                        <p><strong>Tipo:</strong> {plagueDetails[prediction.class_index].plague_type.name || 'N/A'}</p>
                      </div>
                      <div className="col-6">
                        {plagueDetails[prediction.class_index].control_methods && (
                          <>
                            <h5>Métodos de control:</h5>
                            <p><strong>Método:</strong> {plagueDetails[prediction.class_index].control_methods.method || 'N/A'}</p>
                            <p><strong>Frecuencia:</strong> {plagueDetails[prediction.class_index].control_methods.frequency || 'N/A'}</p>
                          </>
                        )}
                      </div>
                      <div className="col-6">
                        {plagueDetails[prediction.class_index].damage_symptoms && (
                          <>
                            <h5>Síntomas del daño:</h5>
                            <p><strong>Síntoma:</strong> {plagueDetails[prediction.class_index].damage_symptoms.symptom || 'N/A'}</p>
                            <p><strong>Gravedad:</strong> {plagueDetails[prediction.class_index].damage_symptoms.severity || 'N/A'}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="history-section">
        <h1 className="display-6">Historial de plagas y enfermedades</h1>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Buscar..." />
          <button className="btn btn-outline-secondary">Filtrar</button>
        </div>
        <div className="list-group">
          {records.map((record) => (
            <div key={record.id} className="list-group-item">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="mb-1">{record.name}</h5>
                  <small className="text-muted">{record.date}</small>
                </div>
                <p className="mb-1">{record.type}</p>
              </div>
              <p className="text-muted">{record.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlagaWebSocket;
