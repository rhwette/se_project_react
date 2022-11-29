import React from 'react';
import './ModalWithForm.css';
import closeX from '../../images/close.svg';

function ModalWithForm({ title, name, onClose, onAddClick }) {
  return (
    <div className="ModalWithForm-popup">
      <div className="ModalWithForm">
        <p className="ModalWithForm-heading">{title}</p>
        <img
          className="ModalWithForm-close"
          onClick={onClose}
          src={closeX}
          alt="close"
        />
        <p className="ModalWithForm-heading">Name</p>
        <label className="ModalWithForm-label">
          <input
            type="text"
            name="name"
            id="place-name"
            className="ModalWithForm-input modal__input_type_card-name"
            placeholder="Name"
            required
            minLength="1"
            maxLength="30"
          />
          <span className="modal__error" id="place-name-error"></span>
        </label>
        <p className="ModalWithForm-heading">Image</p>
        <label className="ModalWithForm-label">
          <input
            type="url"
            name="link"
            id="place-link"
            className="ModalWithForm-input modal__input_type_url"
            placeholder="Image URL"
            required
          />
          <span className="modal__error" id="place-link-error"></span>
        </label>
        <p className="ModalWithForm-heading">Select the weather type:</p>
        <div className="ModalWithForm-input modal__input_type_radio">
          <div>
            <input type="radio" id="choiceHot" name="weatherType" value="hot" />
            <label className="modal__label_radio" htmlFor="choiceHot">
              Hot
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="choiceWarm"
              name="weatherType"
              value="warm"
            />
            <label className="modal__label_radio" htmlFor="choiceWarm">
              Warm
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="choiceCold"
              name="weatherType"
              value="cold"
            />
            <label className="modal__label_radio" htmlFor="choiceCold">
              Cold
            </label>
          </div>
        </div>
        <button className="ModalWithForm-button" type="submit">
          Add Garment
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
