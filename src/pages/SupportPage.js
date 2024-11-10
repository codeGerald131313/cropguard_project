import React, { useState } from 'react';
import Modal from 'react-modal';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/support.css';

// Asegúrate de que el contenedor del mapa tenga altura
const containerStyle = {
  height: '300px',
  width: '100%',
};

Modal.setAppElement('#root');

const UpdateMap = ({ position }) => {
  const map = useMap();
  map.setView(position, map.getZoom());
  return null;
};

const SupportPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [location, setLocation] = useState({ lat: 40.7128, lng: -74.0060 }); // Coordenadas predeterminadas

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Función para buscar Lima, Perú
  const handleSearchLima = () => {
    setLatitude('-12.0464');
    setLongitude('-77.0428');
    setLocation({ lat: -12.0464, lng: -77.0428 });
  };

  // Función para buscar San Martín, Perú
  const handleSearchSanMartin = () => {
    setLatitude('-6.4858');
    setLongitude('-76.3754');
    setLocation({ lat: -6.4858, lng: -76.3754 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cultivo registrado correctamente con las coordenadas proporcionadas.');
    // Aquí puedes hacer lo que quieras con los datos del formulario, como enviarlos a un servidor.
  };

  return (
    <div className="support-page">
      <header className="header">
        <h1>Bienvenido a GreenTech</h1>
        <p>Tu solución integral para el control y gestión de plagas en cultivos de arroz.</p>
      </header>

      <section className="benefits">
        <h2>Beneficios de Afiliarse al Sistema</h2>
        <p>Al unirte a nuestro sistema, podrás gestionar de manera eficiente el control de plagas y enfermedades en tus cultivos de arroz.</p>
        <ul>
        <li>Monitoreo en tiempo real</li>
<li>Alertas y recomendaciones personalizadas</li>
<li>Predicciones en tiempo real</li>
<li>Geoubicación precisa</li>
<li>Gestión optimizada de recursos y aumento de rendimientos</li>

        </ul>
      </section>

      <section className="cta">
        <button onClick={openModal} className="cta-button">Registra tu Cultivo</button>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Registro de Cultivo"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Registrar tu Cultivo</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="cultivoNombre">Nombre del Cultivo:</label>
          <input
            type="text"
            id="cultivoNombre"
            name="cultivoNombre"
            required
            placeholder="Ingrese el nombre del cultivo"
          />

          <label htmlFor="latitude">Latitud:</label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
            placeholder="Ingrese la latitud"
          />

          <label htmlFor="longitude">Longitud:</label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
            placeholder="Ingrese la longitud"
          />

          <button type="button" className="search-button" onClick={handleSearchLima}>
            Buscar Lima, Perú
          </button>

          <button type="button" className="search-button" onClick={handleSearchSanMartin}>
            Buscar San Martín, Perú
          </button>

          <label htmlFor="coordenadas">Coordenadas Geográficas:</label>
          <div className="map-container" style={containerStyle}>
            <MapContainer
              center={[location.lat, location.lng]}
              zoom={13}
              style={containerStyle}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[location.lat, location.lng]}>
                <Popup>Ubicación del cultivo en {latitude === '-12.0464' ? 'Lima, Perú' : 'San Martín, Perú'}</Popup>
              </Marker>
              <UpdateMap position={[location.lat, location.lng]} />
            </MapContainer>
          </div>

          <button type="submit" className="submit-button">Registrar</button>
        </form>
        <button onClick={closeModal} className="close-button">Cerrar</button>
      </Modal>
    </div>
  );
};

export default SupportPage;
