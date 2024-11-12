import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailModal = ({ item, onClose }) => {
  return (
    <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{item.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img src={item.image} alt={item.name} className="img-fluid mb-3" />
            <p><strong>Tipo:</strong> {item.type}</p>
            <p><strong>Descripción:</strong> {item.description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
