import React, { useState } from 'react';
import './ItemModal.css';
import closeX from '../../images/close.svg';
import { removeItem } from '../../utils/api';
import { getItemList } from '../../utils/api';

function ItemModal({
  card,
  onClose,
  isProfileModal,
  setActiveModal,
  setClothingItems,
  onCardClick,
}) {
  const src2 = card.imageUrl;
  const alternate = card.name;
  const title = card.name;
  const weather = card.weather;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function handleDeleteClick() {
    setShowDeleteModal(true);
  }

  function handleConfirmDelete() {
    setActiveModal('');
    removeItem(card.id).then((res) => {
      getItemList()
        .then((items) => {
          setClothingItems(items);
        })
        .catch((err) => console.log(err));
    });
  }

  function handleCancelDelete() {
    setActiveModal('');
  }

  function ConfirmDeleteModal() {
    return (
      <div>
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
              <p className="ItemModalDelete-lineB">
                {' '}
                This action is irreversible.
              </p>
              <div className="ItemModalDelete-buttonContainer">
                <button
                  className="ItemModalDelete-button"
                  onClick={handleConfirmDelete}
                >
                  {' '}
                  Yes, delete item{' '}
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
      {showDeleteModal && <ConfirmDeleteModal />}
    </div>
  );
}

export default ItemModal;
