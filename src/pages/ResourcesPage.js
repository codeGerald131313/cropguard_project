import React from 'react';
import '../styles/resources.css';

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

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <h1>Resources</h1>
      <p>Explore our collection of resources designed to help you manage and protect your crops effectively.</p>

      <div className="resources-list">
        {resources.map(resource => (
          <div key={resource.id} className="resource-item">
            <h3>{resource.title}</h3>
            <span className="resource-type">{resource.type}</span>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">
              Access Resource
            </a>
          </div>
        ))}
      </div>

      <div className="featured-section">
        <h2>Best Practices</h2>
        <p>Discover the best practices for maintaining healthy and sustainable crops:</p>
        <ul>
          <li>Monitor your crops regularly for signs of pests or disease.</li>
          <li>Rotate crops to reduce the buildup of pests and diseases in the soil.</li>
          <li>Use biological control methods where possible to reduce reliance on chemical pesticides.</li>
          <li>Implement integrated pest management (IPM) strategies for long-term sustainability.</li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesPage;
