import React from 'react';
import '../styles/PlagueDetailPage.css';

const PlagueDetailPage = () => {
  // Datos estáticos sobre la plaga
  const plague = {
    name: "Escarabajo de la patata",
    image: "https://inaturalist-open-data.s3.amazonaws.com/photos/99192927/large.jpg", // Reemplaza con una URL válida
    description: "El escarabajo de la patata es una plaga devastadora que afecta principalmente a los cultivos de patatas. Esta plaga se alimenta de las hojas y tallos de las plantas, lo que puede llevar a una reducción significativa en la producción y calidad del cultivo. Además, su presencia puede aumentar el riesgo de enfermedades secundarias en las plantas.",
    lifecycle: "El ciclo de vida del escarabajo de la patata consta de cuatro etapas: huevo, larva, pupa y adulto. Las hembras depositan huevos en el envés de las hojas, que luego eclosionan en larvas. Estas larvas se alimentan vorazmente de la planta durante varias semanas antes de formar pupas. Los adultos emergen de las pupas y continúan el ciclo.",
    habitat: "El escarabajo de la patata se encuentra principalmente en climas templados. Prefiere campos de cultivo de patatas, berenjenas y otros solanáceos. La plaga puede sobrevivir en áreas donde las plantas hospederas están presentes, y puede dispersarse rápidamente a través de áreas agrícolas.",
    impact: (
      <div>
        <p>El escarabajo de la patata puede tener varios efectos negativos en los cultivos, incluyendo:</p>
        <ul>
          <li><strong>Desfoliación:</strong> Las larvas y adultos se alimentan de las hojas y tallos, causando defoliación severa que puede reducir la capacidad fotosintética de las plantas.</li>
          <li><strong>Reducción del Rendimiento:</strong> La pérdida de hojas afecta la salud general de la planta, reduciendo el rendimiento y la calidad de los tubérculos de patata.</li>
          <li><strong>Propagación de Enfermedades:</strong> Las heridas causadas por la alimentación del escarabajo pueden facilitar la entrada de patógenos y enfermedades secundarias en las plantas.</li>
          <li><strong>Resistencia a Pesticidas:</strong> El escarabajo de la patata ha desarrollado resistencia a varios pesticidas, lo que complica el manejo químico de la plaga.</li>
        </ul>
      </div>
    ),
    control: (
      <div>
        <p>Para controlar el escarabajo de la patata, se recomienda una combinación de métodos, incluyendo:</p>
        <ul>
          <li><strong>Rotación de Cultivos:</strong> Alternar los cultivos de patata con otros tipos de cultivos puede ayudar a reducir la población de escarabajos.</li>
          <li><strong>Uso de Pesticidas Selectivos:</strong> Aplicar pesticidas específicos para escarabajos de la patata puede ayudar a controlar su número.</li>
          <li><strong>Métodos Biológicos:</strong> Introducir enemigos naturales como ciertos escarabajos depredadores o avispas parasitoides puede ser efectivo.</li>
          <li><strong>Manejo Manual:</strong> Inspeccionar las plantas regularmente y eliminar los escarabajos y larvas manualmente puede ayudar a reducir su número.</li>
          <li><strong>Trampas:</strong> Utilizar trampas con feromonas para capturar adultos puede ayudar a monitorear y controlar su población.</li>
        </ul>
      </div>
    )
  };

  return (
    <div className="plague-detail-container">
      <div className="plague-header">
        <img src={plague.image} alt={plague.name} className="plague-image" />
        <div className="plague-info">
          <h1 className="plague-title">{plague.name}</h1>
          <h2 className="plague-subtitle">Descripción</h2>
          <p className="plague-description">{plague.description}</p>

          <h2 className="plague-subtitle">Ciclo de Vida</h2>
          <p className="plague-lifecycle">{plague.lifecycle}</p>

          <h2 className="plague-subtitle">Hábitat</h2>
          <p className="plague-habitat">{plague.habitat}</p>

          <h2 className="plague-subtitle">Impacto en los Cultivos</h2>
          <div className="plague-impact">{plague.impact}</div>

          <h2 className="plague-subtitle">Control</h2>
          <div className="plague-control">{plague.control}</div>
        </div>
      </div>
    </div>
  );
};

export default PlagueDetailPage;
