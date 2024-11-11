import React, { useState, useEffect } from "react";
import "../styles/HistoryPage.css"; // Ensure you have the correct CSS file for this layout

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
    const socketInstance = new WebSocket("ws://cropguardbackend-production.up.railway.app//ws/plague_updates/");
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
    <div style={containerStyle}>
      <div className="websocket-section">
        <h2>Real-time Predictions</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <h3>Predictions:</h3>
        <ul>
          {predictions.map((prediction, index) => (
            <li
              key={index}
              style={{
                backgroundColor: prediction.color === "red" ? "#ffcccc" : "#ccffcc",
                padding: "10px",
                margin: "5px 0",
                borderRadius: "5px",
              }}
            >
              {prediction.predicted_class} - Confidence: {prediction.confidence}

              {plagueDetails[prediction.class_index] && (
                <div style={plagueCardStyle}>
                  <h4>Details for {plagueDetails[prediction.class_index].name}</h4>
                  <p><strong>Description:</strong> {plagueDetails[prediction.class_index].description}</p>
                  <p><strong>Type:</strong> {plagueDetails[prediction.class_index].plague_type.name}</p>

                  {plagueDetails[prediction.class_index].control_methods && (
                    <div>
                      <h5>Control Methods:</h5>
                      <ul>
                        <li><strong>Method:</strong> {plagueDetails[prediction.class_index].control_methods.method || 'N/A'}</li>
                        <li><strong>Frequency:</strong> {plagueDetails[prediction.class_index].control_methods.frequency || 'N/A'}</li>
                      </ul>
                    </div>
                  )}

                  {plagueDetails[prediction.class_index].damage_symptoms && (
                    <div>
                      <h5>Damage Symptoms:</h5>
                      <ul>
                        <li><strong>Symptom:</strong> {plagueDetails[prediction.class_index].damage_symptoms.symptom || 'N/A'}</li>
                        <li><strong>Severity:</strong> {plagueDetails[prediction.class_index].damage_symptoms.severity || 'N/A'}</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="history-section">
        <h1 className="history-title">Pest and Disease History</h1>
        <div className="history-filters">
          <input type="text" placeholder="Search..." className="filter-input" />
          <button className="filter-button">Filter</button>
        </div>
        <div className="history-list">
          {records.map((record) => (
            <div key={record.id} className="history-item">
              <div className="history-item-date">{record.date}</div>
              <div className="history-item-content">
                <h2 className="history-item-name">{record.name}</h2>
                <p className="history-item-type">{record.type}</p>
                <p className="history-item-description">{record.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const plagueCardStyle = {
  backgroundColor: "#f9f9f9",
  padding: "15px",
  borderRadius: "5px",
  border: "1px solid #ddd",
  marginTop: "10px",
};

const containerStyle = {
  width: '50%',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f1f1f1',
  borderRadius: '8px',
  border: '1px solid #ddd'
};

export default PlagaWebSocket;
