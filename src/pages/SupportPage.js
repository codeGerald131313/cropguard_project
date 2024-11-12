import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEye, faBell, faChartLine, faMapMarkerAlt, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const containerStyle = {
  height: '300px',
  width: '100%',
};

const UpdateMap = ({ position }) => {
  const map = useMap();
  map.setView(position, map.getZoom());
  return null;
};

const CultivationForm = ({ onClose }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [location, setLocation] = useState({ lat: 40.7128, lng: -74.0060 });

  const handleSearchLima = () => {
    setLatitude('-12.0464');
    setLongitude('-77.0428');
    setLocation({ lat: -12.0464, lng: -77.0428 });
  };

  const handleSearchSanMartin = () => {
    setLatitude('-6.4858');
    setLongitude('-76.3754');
    setLocation({ lat: -6.4858, lng: -76.3754 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cultivo registrado correctamente con las coordenadas proporcionadas.');
    onClose(); // Cerrar el formulario después de registrar el cultivo
  };

  return (
    <div className="card p-4">
      <h2>Registrar tu Cultivo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cultivoNombre" className="form-label">Nombre del Cultivo:</label>
          <input
            type="text"
            id="cultivoNombre"
            name="cultivoNombre"
            required
            placeholder="Ingrese el nombre del cultivo"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">Latitud:</label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
            placeholder="Ingrese la latitud"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="longitude" className="form-label">Longitud:</label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
            placeholder="Ingrese la longitud"
            className="form-control"
          />
        </div>

        <div className="d-flex gap-2 mb-3">
          <button type="button" className="btn btn-outline-secondary w-50" onClick={handleSearchLima}>
            Buscar Lima, Perú
          </button>
          <button type="button" className="btn btn-outline-secondary w-50" onClick={handleSearchSanMartin}>
            Buscar San Martín, Perú
          </button>
        </div>

        <div className="mb-3">
          <label htmlFor="coordenadas" className="form-label">Coordenadas Geográficas:</label>
          <div style={containerStyle}>
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
        </div>

        {/* Botones en la misma línea */}
        <div className="d-flex justify-content-between mt-4">
          <button type="submit" className="btn btn-success w-50 me-2">Registrar</button>
          <button type="button" onClick={onClose} className="btn btn-secondary w-50 ms-2">Cerrar</button>
        </div>      </form>
    </div>
  );
};

const SupportPage = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <div className="container my-5">

      {showForm ? (
        <CultivationForm onClose={closeForm} />
      ) : (
        <>
          <section className="text-center mb-5">
            <h2 className="mb-3">Beneficios de Afiliarse al Sistema</h2>
            <p className="mb-4">Al unirte a nuestro sistema, podrás gestionar de manera eficiente el control de plagas y enfermedades en tus cultivos de arroz.</p>

            <div className="row justify-content-center">
              <div className="col-md-4 col-lg-3 mb-3">
                <div className="card shadow-sm h-100 text-center border-0">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faEye} size="2x" className="text-primary mb-3" />
                    <h5 className="card-title">Monitoreo en Tiempo Real</h5>
                    <p className="card-text">Monitorea tus cultivos en tiempo real para una detección temprana de problemas.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-3 mb-3">
                <div className="card shadow-sm h-100 text-center border-0">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faBell} size="2x" className="text-success mb-3" />
                    <h5 className="card-title">Alertas Personalizadas</h5>
                    <p className="card-text">Recibe notificaciones y recomendaciones específicas para tus cultivos.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-3 mb-3">
                <div className="card shadow-sm h-100 text-center border-0">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faChartLine} size="2x" className="text-info mb-3" />
                    <h5 className="card-title">Predicciones en Tiempo Real</h5>
                    <p className="card-text">Accede a predicciones avanzadas para optimizar tus decisiones.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-3 mb-3">
                <div className="card shadow-sm h-100 text-center border-0">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="text-danger mb-3" />
                    <h5 className="card-title">Geoubicación Precisa</h5>
                    <p className="card-text">Ubica tus cultivos y recibe análisis específicos de ubicación.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-3 mb-3">
                <div className="card shadow-sm h-100 text-center border-0">
                  <div className="card-body">
                    <FontAwesomeIcon icon={faSeedling} size="2x" className="text-warning mb-3" />
                    <h5 className="card-title">Gestión de Recursos</h5>
                    <p className="card-text">Optimiza el uso de recursos para mejorar los rendimientos y sostenibilidad.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <button onClick={openForm} className="btn btn-lg btn-success px-4 py-2">
              Registra tu Cultivo
            </button>
          </section>
        </>
      )}
    </div>
  );
};

export default SupportPage;
