import React from 'react';
import './construction.css';

const  ConstructionModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>🚧 Under Construction 🚧</h1>
        <p>The Site is kept under maintainance by the owner.</p>
        <p>We're working hard to bring you an amazing experience. Stay tuned!</p>
      </div>
    </div>
  );
};

export default ConstructionModal;