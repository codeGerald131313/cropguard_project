import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <main className="home">
      <div className="hero">
        <h2>Bienvenido a AgroTech</h2>
        <p>Tu socio en la agricultura inteligente</p>
        <button className="cta-btn">Comienza ahora</button>
      </div>
      
      <section className="features">
        <div className="feature">
          <img src="/images/predictions.png" alt="Predicciones" />
          <h3>Predicciones Precisas</h3>
          <p>Anticipa los problemas de tus cultivos con nuestras predicciones avanzadas y toma decisiones informadas antes de que surjan complicaciones.</p>
        </div>
        <div className="feature">
          <img src="/images/catalog.png" alt="Catálogo" />
          <h3>Catálogo Sostenible</h3>
          <p>Explora un catálogo extenso de soluciones sostenibles, diseñadas específicamente para las necesidades de tu campo.</p>
        </div>
        <div className="feature">
          <img src="/images/resources.png" alt="Recursos" />
          <h3>Guías y Recursos</h3>
          <p>Accede a recursos detallados y guías prácticas que te ayudarán a gestionar tus cultivos de manera eficiente y efectiva.</p>
        </div>
      </section>
      
      <section className="about">
        <h2>Sobre Nosotros</h2>
        <p>En AgroTech, estamos comprometidos con empoderar a los agricultores mediante soluciones tecnológicas avanzadas que mejoran la eficiencia y los rendimientos, todo mientras apoyamos prácticas agrícolas sostenibles para un futuro mejor.</p>
      </section>
    </main>
  );
};

export default HomePage;
