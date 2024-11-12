import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faVideo, faFileAlt, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const resources = [
  {
    id: 1,
    title: 'Guía de Buenas Prácticas para el Control de Plagas',
    type: 'Documento PDF',
    description: 'Descarga esta completa guía para aprender técnicas efectivas de control de plagas.',
    link: '/resources/buenas_practicas_control_plagas.pdf',
  },
  {
    id: 2,
    title: 'Video: Prevención de Enfermedades del Arroz',
    type: 'Video',
    description: 'Mira este video instructivo sobre cómo prevenir enfermedades comunes en cultivos de arroz.',
    link: 'https://www.youtube.com/watch?v=example',
  },
  {
    id: 3,
    title: 'Artículo: Innovaciones en el Manejo de Plagas',
    type: 'Artículo',
    description: 'Descubre las últimas innovaciones tecnológicas en el manejo de plagas.',
    link: '/articles/innovaciones_plagas',
  },
  {
    id: 4,
    title: 'Seminario Web: Protección de Cultivos',
    type: 'Webinar',
    description: 'Únete a nuestro seminario web gratuito sobre la protección de cultivos de arroz.',
    link: '/webinar/proteccion_cultivos',
  },
];

// Función para obtener el icono adecuado según el tipo de recurso
const getIconForType = (type) => {
  switch (type) {
    case 'Documento PDF':
      return <FontAwesomeIcon icon={faFilePdf} className="text-danger" />;
    case 'Video':
      return <FontAwesomeIcon icon={faVideo} className="text-success" />;
    case 'Artículo':
      return <FontAwesomeIcon icon={faFileAlt} className="text-secondary" />;
    case 'Webinar':
      return <FontAwesomeIcon icon={faChalkboardTeacher} className="text-success" />;
    default:
      return <FontAwesomeIcon icon={faFileAlt} className="text-muted" />;
  }
};

const ResourcesPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Recursos</h1>
      <p className="text-center mb-5">
        Explora nuestra colección de recursos diseñados para ayudarte a gestionar y proteger tus cultivos de manera efectiva.
      </p>

      <div className="row">
        {resources.map(resource => (
          <div key={resource.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title d-flex align-items-center">
                  {getIconForType(resource.type)} {/* Icono dinámico */}
                  <span className="ms-2">{resource.title}</span>
                </h5>
                <span className="badge bg-success mb-2">{resource.type}</span>
                <p className="card-text">{resource.description}</p>
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="mt-auto btn btn-outline-success">
                  Acceder al recurso
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <h2 className="text-center">Mejores Prácticas</h2>
        <p className="text-center">Descubre las mejores prácticas para mantener cultivos saludables y sostenibles:</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Monitorea tus cultivos regularmente para detectar signos de plagas o enfermedades.</li>
          <li className="list-group-item">Rota los cultivos para reducir la acumulación de plagas y enfermedades en el suelo.</li>
          <li className="list-group-item">Usa métodos de control biológico siempre que sea posible para reducir la dependencia de pesticidas químicos.</li>
          <li className="list-group-item">Implementa estrategias de manejo integrado de plagas (MIP) para una sostenibilidad a largo plazo.</li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesPage;
