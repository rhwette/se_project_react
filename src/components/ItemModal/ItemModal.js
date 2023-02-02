import React, { useState } from 'react';
import './ItemModal.css';
import closeX from '../../images/close.svg';

function ConfirmDeleteModal({
  isLoading,
  handleCardDelete,
  handleCancelDelete,
  card,
  onClose,
}) {
  return (
    <div className="ItemModalDelete-popup">
      <div className="ItemModalDelete">
        <img
          className="ItemModalDelete-close"
          onClick={onClose}
          src={closeX}
          alt="close"
        />
        <div>
          <p className="ItemModalDelete-lineA">
            {' '}
            Are you sure you want to delete this item?{' '}
          </p>
          <p className="ItemModalDelete-lineB"> This action is irreversible.</p>
          <div className="ItemModalDelete-buttonContainer">
            <button
              className="ItemModalDelete-button"
              onClick={() => {
                handleCardDelete(card);
              }}
            >
              {isLoading ? 'deleting' : 'delete'}
            </button>
            <button
              className="ItemModalDelete-cancel"
              onClick={handleCancelDelete}
            >
              {' '}
              Cancel{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemModal({
  isLoading,
  card,
  onClose,
  isProfileModal,
  setActiveModal,
  setClothingItems,
  onCardClick,
  handleCardDelete,
  showDeleteModal,
  setShowDeleteModal,
}) {
  const src2 = card.imageUrl;
  const alternate = card.name;
  const title = card.name;
  const weather = card.weather;

  function handleDeleteClick() {
    setShowDeleteModal(true);
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
        <div className="ItemModal-container">
          <p className="ItemModal-text"> {title}</p>
          {isProfileModal && (
            <button className="ItemModal-button" onClick={handleDeleteClick}>
              {' '}
              Delete item
            </button>
          )}
        </div>
        <p className="ItemModal-weather">Weather: {weather}</p>
      </div>
      {showDeleteModal && (
        <ConfirmDeleteModal
          card={card}
          onClose={onClose}
          handleCardDelete={handleCardDelete}
          handleCancelDelete={() => setShowDeleteModal(false)}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default ItemModal;
