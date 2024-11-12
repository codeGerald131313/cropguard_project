import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [hover, setHover] = useState(false);

  return (
    <main>
      <div
        className="text-center p-5 text-white d-flex flex-column justify-content-center align-items-center position-relative"
        style={{
          backgroundImage: `url('https://www.ceupe.do/images/easyblog_articles/281/b2ap3_large_Agrotech.jpg')`, // Cambia esta ruta a tu imagen de portada
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Capa de superposición semi-transparente */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Color negro con transparencia
            opacity: hover ? 0.6 : 0.4, // Se oscurece al hacer hover
            transition: 'opacity 0.3s ease-in-out', // Transición suave
          }}
        ></div>

        <h2 className="display-4 fw-bold position-relative">Bienvenido a AgroTech</h2>
        <p className="lead position-relative">Tu socio en la agricultura inteligente</p>
        <button className="btn btn-light btn-lg mt-3 position-relative">Comienza ahora</button>
      </div>

      <section className="container my-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-3">
              <img
                src="https://observatorio-ia.com/wp-content/uploads/2024/10/DALL%C2%B7E-2024-10-21-12.34.42-A-vibrant-and-sustainable-agricultural-landscape-featuring-advanced-technology-in-use.-Show-a-diverse-group-of-farmers-using-tablets-and-drones-in-a-g-1024x585.webp"
                alt="Predicciones"
                className="img-fluid mb-3"
                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
              />
              <h3>Predicciones Precisas</h3>
              <p>Anticipa los problemas de tus cultivos con nuestras predicciones avanzadas y toma decisiones informadas antes de que surjan complicaciones.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-3">
              <img
                src="https://media.istockphoto.com/id/1414916304/es/foto/concepto-de-objetivo-de-desarrollo-sostenible-manos-sosteniendo-la-red-de-comunicaci%C3%B3n-global.jpg?s=612x612&w=0&k=20&c=thZuR7og6KVb73U2LgitnjjKtmy9fVzKrtMzWcsV_qA="
                alt="Catálogo"
                className="img-fluid mb-3"
                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
              />
              <h3>Catálogo Sostenible</h3>
              <p>Explora un catálogo extenso de soluciones sostenibles, diseñadas específicamente para las necesidades de tu campo.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-3">
              <img
                src="https://impulsapopular.com/wp-content/uploads/2024/08/0255-Agrotech-ideas-para-emprender-en-este-sector.jpg"
                alt="Recursos"
                className="img-fluid mb-3"
                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
              />
              <h3>Guías y Recursos</h3>
              <p>Accede a recursos detallados y guías prácticas que te ayudarán a gestionar tus cultivos de manera eficiente y efectiva.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="text-center p-5 bg-light">
        <h2>Sobre Nosotros</h2>
        <p>En AgroTech, estamos comprometidos con empoderar a los agricultores mediante soluciones tecnológicas avanzadas que mejoran la eficiencia y los rendimientos, todo mientras apoyamos prácticas agrícolas sostenibles para un futuro mejor.</p>
      </section>
    </main>
  );
};

export default HomePage;
