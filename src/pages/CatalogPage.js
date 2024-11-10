import React, { useState } from 'react';
import '../styles/catalog.css';

const data = [
  { id: 2, name: 'Enfermedad del Mosaico del Arroz', type: 'enfermedad', image: 'https://example.com/mosaico_arroz.jpg', description: 'El mosaico del arroz causa manchas irregulares en las hojas, afectando el rendimiento del cultivo.' },
  { id: 3, name: 'Plaga del Gusano Cogollero del Arroz', type: 'plaga', image: 'https://example.com/gusano_cogollero_arroz.jpg', description: 'El gusano cogollero se alimenta del arroz, dañando las hojas y reduciendo la calidad de la planta.' },
  { id: 4, name: 'Enfermedad del Tizón Bacteriano del Arroz', type: 'enfermedad', image: 'https://example.com/tizon_bacteriano_arroz.jpg', description: 'El tizón bacteriano afecta las hojas y puede causar importantes pérdidas en el rendimiento.' },
  { id: 5, name: 'Plaga de Chinche Apestosa del Arroz', type: 'plaga', image: 'https://example.com/chinche_apestosa_arroz.jpg', description: 'La chinche apestosa perfora los granos de arroz, lo que resulta en una reducción de la calidad del grano.' },
  { id: 6, name: 'Enfermedad del Añublo del Arroz', type: 'enfermedad', image: 'https://example.com/añublo_arroz.jpg', description: 'El añublo del arroz es una enfermedad fúngica que provoca lesiones y manchas en las hojas y tallos.' },
];

const CatalogPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = data.filter(item => 
    filter === 'all' ? true : item.type === filter
  );

  return (
    <div className="catalog-page">
      <h1>Catálogo de Plagas y Enfermedades del Arroz</h1>
      
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Todos</button>
        <button onClick={() => setFilter('plaga')} className={filter === 'plaga' ? 'active' : ''}>Plagas</button>
        <button onClick={() => setFilter('enfermedad')} className={filter === 'enfermedad' ? 'active' : ''}>Enfermedades</button>
      </div>
      
      <div className="catalog-list">
        {filteredItems.map(item => (
          <div key={item.id} className="catalog-item">
            <img src={item.image} alt={item.name} className="catalog-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
