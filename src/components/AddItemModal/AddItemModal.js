import React, { useEffect, useState } from 'react';
import './AddItemModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function AddItemModal({ modalFormAdd, closeAllModals }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [weatherType, setWeatherType] = useState('');

  const handleNameChange = (evt) => {
    console.log('evt.target', evt.target);
    setName(evt.target.value);
  };

  const handleImageChange = (evt) => {
    console.log('evt.target', evt.target);
    setImage(evt.target.value);
  };

  const handleWeatherTypeChange = (evt) => {
    console.log('evt.target', evt.target);
    setWeatherType(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    modalFormAdd(name, image, weatherType);
  };

  return (
    <ModalWithForm
      title={'New garment'}
      buttonLabel={'Add garment'}
      onSubmit={handleSubmit}
      onClose={closeAllModals}
    >
      {/* first child starts here */}
      <label htmlFor="clothing-name" className="ModalWithForm-heading">
        Name
        <input
          type="text"
          value={name}
          name="name"
          id="clothing-name"
          className="ModalWithForm-input modal__input_type_card-name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleNameChange}
        />
        <span className="modal__error" id="clothing-name-error"></span>
      </label>

      {/* second child starts here */}
      <label htmlFor="clothing-link" className="ModalWithForm-heading">
        Image
        <input
          type="url"
          value={image}
          name="link"
          id="clothing-link"
          className="ModalWithForm-input modal__input_type_url"
          placeholder="Image URL"
          required
          onChange={handleImageChange}
        />
        <span className="modal__error" id="clothing-link-error"></span>
      </label>

      {/* third child starts here */}
      <p className="ModalWithForm-heading">select weather type</p>
      <div className="ModalWithForm-input modal__input_type_radio">
        <div>
          <input
            type="radio"
            checked={weatherType === 'hot'}
            id="choiceHot"
            name="weatherType"
            value="hot"
            onChange={handleWeatherTypeChange}
          />
          <label className="modal__label_radio" htmlFor="choiceHot">
            Hot
          </label>
        </div>
        <div>
          <input
            type="radio"
            checked={weatherType === 'warm'}
            id="choiceWarm"
            name="weatherType"
            value="warm"
            onChange={handleWeatherTypeChange}
          />
          <label className="modal__label_radio" htmlFor="choiceWarm">
            Warm
          </label>
        </div>
        <div>
          <input
            type="radio"
            checked={weatherType === 'cold'}
            id="choiceCold"
            name="weatherType"
            value="cold"
            onChange={handleWeatherTypeChange}
          />
          <label className="modal__label_radio" htmlFor="choiceCold">
            Cold
          </label>
        </div>
      </div>

      {/* end children here */}
    </ModalWithForm>
  );
}

export default AddItemModal;
