import React from 'react';
import '../styles/DiseaseDetailPage.css';

const DiseaseDetailPage = () => {
  // Datos estáticos sobre la enfermedad
  const disease = {
    name: "Oídio del arroz",
    image: "https://img.freepik.com/fotos-premium/oido-verde-arroz-campo-arroz-arroz_49507-548.jpg", // Reemplaza con una URL válida
    description: "El oídio del arroz es una enfermedad fúngica causada por el hongo *Sphacelotheca reiliana*. Afecta principalmente a los cultivos de arroz y se manifiesta como un polvo blanco en las hojas, tallos y espigas. Esta enfermedad puede reducir significativamente el rendimiento del cultivo y la calidad del grano.",
    symptoms: "Los síntomas del oídio del arroz incluyen la presencia de un polvo blanco en las hojas y espigas. Con el tiempo, las hojas afectadas se vuelven secas y quebradizas, lo que puede llevar a una reducción en la fotosíntesis y el crecimiento de la planta.",
    transmission: "El oídio del arroz se transmite a través de esporas que son liberadas por el hongo y se dispersan con el viento. También puede ser transmitido por semillas infectadas o por el contacto directo entre plantas infectadas y sanas.",
    prevention: (
      <div>
        <p>Para prevenir el oídio del arroz, se recomienda seguir estos métodos:</p>
        <ul>
          <li><strong>Uso de Semillas Certificadas:</strong> Utilizar semillas libres de hongos puede reducir el riesgo de infección.</li>
          <li><strong>Rotación de Cultivos:</strong> Alternar el cultivo de arroz con otros tipos de cultivos puede ayudar a interrumpir el ciclo del hongo.</li>
          <li><strong>Control de Malezas:</strong> Eliminar malezas que pueden servir como hospedadores alternativos para el hongo.</li>
          <li><strong>Tratamientos Fungicidas:</strong> Aplicar fungicidas recomendados durante el periodo crítico para controlar la enfermedad.</li>
          <li><strong>Mejorar la Ventilación:</strong> Asegurar una adecuada ventilación y espaciamiento entre las plantas para reducir la humedad, que favorece el crecimiento del hongo.</li>
        </ul>
      </div>
    ),
    treatment: (
      <div>
        <p>El tratamiento del oídio del arroz incluye:</p>
        <ul>
          <li><strong>Aplicación de Fungicidas:</strong> Utilizar fungicidas específicos para el oídio puede controlar la infección. Es importante seguir las recomendaciones del fabricante para la aplicación.</li>
          <li><strong>Eliminación de Plantas Afectadas:</strong> Retirar y destruir las plantas severamente infectadas para reducir la fuente de esporas.</li>
          <li><strong>Monitoreo Regular:</strong> Inspeccionar los cultivos regularmente para detectar signos tempranos de la enfermedad y tomar medidas oportunas.</li>
        </ul>
      </div>
    )
  };

  return (
    <div className="disease-detail-container">
      <div className="disease-header">
        <img src={disease.image} alt={disease.name} className="disease-image" />
        <div className="disease-info">
          <h1 className="disease-title">{disease.name}</h1>
          <h2 className="disease-subtitle">Descripción</h2>
          <p className="disease-description">{disease.description}</p>

          <h2 className="disease-subtitle">Síntomas</h2>
          <p className="disease-symptoms">{disease.symptoms}</p>

          <h2 className="disease-subtitle">Transmisión</h2>
          <p className="disease-transmission">{disease.transmission}</p>

          <h2 className="disease-subtitle">Prevención</h2>
          <div className="disease-prevention">{disease.prevention}</div>

          <h2 className="disease-subtitle">Tratamiento</h2>
          <div className="disease-treatment">{disease.treatment}</div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetailPage;
