import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  { id: 2, name: 'Enfermedad del Mosaico del Arroz', type: 'enfermedad', image: 'https://cdn-redagricola.s3-accelerate.amazonaws.com/2023/04/destacada_enfermedad-1-300x224.png', description: 'El mosaico del arroz causa manchas irregulares en las hojas, afectando el rendimiento del cultivo.' },
  { id: 3, name: 'Plaga del Gusano Cogollero del Arroz', type: 'plaga', image: 'https://www.adama.com/peru/sites/adama_peru/files/styles/article_tablet/public/2024-01/GUSANO.jpg?h=1dd98e6c&itok=T-NwRY4U', description: 'El gusano cogollero se alimenta del arroz, dañando las hojas y reduciendo la calidad de la planta.' },
  { id: 4, name: 'Enfermedad del Tizón Bacteriano del Arroz', type: 'enfermedad', image: 'https://content.peat-cloud.com/w400/bacterial-blight-of-rice-rice-1581498605.jpg', description: 'El tizón bacteriano afecta las hojas y puede causar importantes pérdidas en el rendimiento.' },
  { id: 5, name: 'Plaga de Chinche Apestosa del Arroz', type: 'plaga', image: 'https://www.researchgate.net/publication/339471850/figure/fig4/AS:862305579446273@1582601079963/Adultos-de-T-limbativentris-en-tallos-y-hojas-de-arroz-Fuente-Menegaz-et-al-2012.png', description: 'La chinche apestosa perfora los granos de arroz, lo que resulta en una reducción de la calidad del grano.' },
  { id: 6, name: 'Enfermedad del Añublo del Arroz', type: 'enfermedad', image: 'https://content.peat-cloud.com/w400/rice-sheath-blight-rice-1581427208.jpg', description: 'El añublo del arroz es una enfermedad fúngica que provoca lesiones y manchas en las hojas y tallos.' },
  // Más elementos de prueba
];

const CatalogPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = data.filter(item => 
    filter === 'all' ? true : item.type === filter
  );

  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Catálogo de Plagas y Enfermedades del Arroz</h1>
      
      <div className="d-flex justify-content-center mb-4">
        <button onClick={() => setFilter('all')} className={`btn btn-outline-success mx-2 ${filter === 'all' ? 'active' : ''}`}>Todos</button>
        <button onClick={() => setFilter('plaga')} className={`btn btn-outline-success mx-2 ${filter === 'plaga' ? 'active' : ''}`}>Plagas</button>
        <button onClick={() => setFilter('enfermedad')} className={`btn btn-outline-success mx-2 ${filter === 'enfermedad' ? 'active' : ''}`}>Enfermedades</button>
      </div>
      
      <div className="row">
        {filteredItems.map(item => (
          <div key={item.id} className="col-md-6 col-lg-4 mb-4">
            <div 
              className="card h-100 shadow-sm" 
              onClick={() => handleOpenModal(item)}
              style={{ cursor: 'pointer' }}
            >
              <img src={item.image} alt={item.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalle */}
      {selectedItem && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedItem.name}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={selectedItem.image} alt={selectedItem.name} className="img-fluid mb-3" />
                <p><strong>Tipo:</strong> {selectedItem.type}</p>
                <p><strong>Descripción:</strong> {selectedItem.description}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                <button type="button" className="btn btn-primary">Guardar cambios</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
