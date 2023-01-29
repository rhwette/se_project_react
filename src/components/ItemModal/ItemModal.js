import React, { useState } from 'react';
import './ItemModal.css';
import closeX from '../../images/close.svg';
import { removeItem } from '../../utils/api';
import { getItemList } from '../../utils/api';

function ConfirmDeleteModal({
  handleCardDelete,
  handleCancelDelete,
  card,
  onClose,
  // handleConfirmDelete,
}) {
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
                onClick={() => {
                  handleCardDelete(card);
                  handleCancelDelete();
                  onClose();
                }}
              >
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

function ItemModal({
  card,
  onClose,
  isProfileModal,
  setActiveModal,
  setClothingItems,
  // onCardClick,
  handleCardDelete,
}) {
  const src2 = card.imageUrl;
  const alternate = card.name;
  const title = card.name;
  const weather = card.weather;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function handleDeleteClick() {
    setShowDeleteModal(true);
  }

  // function handleConfirmDelete() {
  //   setActiveModal('');
  //   removeItem(card.id).then((res) => {
  //     // console.log('FFFA card.id in ItemModal=' card.id);
  //     console.log('FFFB res in ItemModal=', res);
  //     getItemList()
  //       .then((items) => {
  //         console.log('GGG items in ItemModal=', items);
  //         setClothingItems(items);
  //       })
  //       .catch((err) => console.log(err));
  //   });
  // }

  function handleCancelDelete() {
    setActiveModal('');
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
          handleCardDelete={handleCardDelete}
          handleCancelDelete={() => setShowDeleteModal(false)}
          // handleConfirmDelete={handleConfirmDelete}
          card={card}
          onClose={onClose}
        />
      )}
    </div>
  );
}

export default ItemModal;
