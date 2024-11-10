import React, { useState } from 'react';
import '../styles/HistoryPage.css';

const HistoryPage = () => {
  // Datos estáticos para la demostración
  const [records] = useState([
    {
      id: 1,
      date: "2024-09-01",
      name: "Escarabajo de la Patata",
      type: "Plaga",
      description: "Observado en campos de patatas, causando daños significativos.",
    },
    {
      id: 2,
      date: "2024-08-15",
      name: "Malaria",
      type: "Enfermedad",
      description: "Reportado en áreas rurales, con síntomas severos de fiebre.",
    },
    // Más registros aquí...
  ]);

  return (
    <div className="history-container">
      <h1 className="history-title">Historial de Plagas y Enfermedades</h1>
      <div className="history-filters">
        <input type="text" placeholder="Buscar..." className="filter-input" />
        <button className="filter-button">Filtrar</button>
      </div>
      <div className="history-list">
        {records.map(record => (
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
  );
};

export default HistoryPage;
