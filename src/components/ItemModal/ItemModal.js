import React, { useState } from 'react';
import './ItemModal.css';
import closeX from '../../images/close.svg';

function ItemModal({ card, onClose, isProfileModal, setActiveModal }) {
  const src2 = card.imageUrl;
  const alternate = card.name;
  const title = card.name;
  const weather = card.weather;

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  function handleDeleteClick() {
    // ConfirmDeleteModal();
    setShowDeleteModal(true);
  }

  function ConfirmDeleteModal() {
    function handleConfirmDelete() {
      setActiveModal('');
      setShowDeleteModal(false);
    }
    return (
      <div>
        <p> are you sure </p>
        <button onClick={handleConfirmDelete}> Delete </button>
      </div>
    );
  }

  return (
    <div className="ItemModal-popup">
      <div className="ItemModal">
        <img
          className="ItemModal-close"
          onClick={onClose}
          src={closeX}
          alt="close"
        />
        <img className="ItemModal-image" src={src2} alt={alternate} />
        <div className="ItemModal-textLine">
          <p className="ItemModal-textItem"> {title}</p>
          {isProfileModal && (
            <button
              className="ItemModal-textItemButton"
              onClick={handleDeleteClick}
            >
              {' '}
              Delete item
            </button>
          )}
        </div>
        <p className="ItemModal-textWeather">Weather: {weather}</p>
      </div>
      {showDeleteModal && <ConfirmDeleteModal />}
    </div>
  );
}

export default ItemModal;
