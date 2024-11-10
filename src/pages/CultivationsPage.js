import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';
import '../styles/cultivations.css';

const HeatmapLayer = ({ points }) => {
  const map = useMap();

  const heatPoints = points.map(point => [point.lat, point.lng, point.value]);

  L.heatLayer(heatPoints, { radius: 25 }).addTo(map);

  return null;
};

const CultivationsPage = () => {
  const [filter, setFilter] = useState('all');

  // Simulación de datos para el mapa de calor
  const data = [
    { lat: 51.505, lng: -0.09, value: 0.8 },  // Ejemplo: Sector saludable
    { lat: 51.51, lng: -0.1, value: 0.5 },   // Ejemplo: Sector moderadamente afectado
    { lat: 51.49, lng: -0.08, value: 0.2 },  // Ejemplo: Sector afectado
    // Añadir más puntos aquí...
  ];

  return (
    <div className="cultivations-page">
      <h1>Tu Mapa de Cultivos</h1>
      <p>Visualiza el estado de salud de tus cultivos con el mapa de calor.</p>

      <div className="filter-controls">
        <label htmlFor="filter">Filtrar por:</label>
        <select id="filter" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">Todos</option>
          <option value="plagas">Plagas</option>
          <option value="enfermedades">Enfermedades</option>
        </select>
      </div>

      <div className="map-container">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <HeatmapLayer points={data} />
        </MapContainer>
      </div>
    </div>
  );
};

export default CultivationsPage;
