import React, { useEffect, useState } from 'react';
import './AddItemModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useForm } from '../../utils/customHooks';

function AddItemModal({ isLoading, modalFormAdd, closeAllModals }) {
  const { values, handleChange, setValues } = useForm({
    name: '',
    image: '',
    weatherType: '',
  });

  // const [name, setName] = useState('');
  // const [image, setImage] = useState('');
  // const [weatherType, setWeatherType] = useState('');

  // const handleNameChange = (evt) => {
  //   setName(evt.target.value);
  // };

  // const handleImageChange = (evt) => {
  //   setImage(evt.target.value);
  // };

  // const handleWeatherTypeChange = (evt) => {
  //   setWeatherType(evt.target.value);
  // };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    modalFormAdd(values.name, values.image, values.weatherType);
  };

  return (
    <ModalWithForm
      title={'New garment'}
      // buttonLabel={'Add garment'}
      buttonLabel={isLoading ? 'Saving...' : 'Save'}
      onSubmit={handleSubmit}
      onClose={closeAllModals}
    >
      {/* first child starts here */}
      <label htmlFor="clothing-name" className="ModalWithForm-heading">
        Name
        <input
          type="text"
          value={values.name}
          name="name"
          id="clothing-name"
          className="ModalWithForm-input modal__input_type_card-name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleChange}
        />
        <span className="modal__error" id="clothing-name-error"></span>
      </label>

      {/* second child starts here */}
      <label htmlFor="clothing-link" className="ModalWithForm-heading">
        Image
        <input
          type="url"
          value={values.image}
          name="image"
          id="clothing-link"
          className="ModalWithForm-input modal__input_type_url"
          placeholder="Image URL"
          required
          onChange={handleChange}
        />
        <span className="modal__error" id="clothing-link-error"></span>
      </label>

      {/* third child starts here */}
      <p className="ModalWithForm-heading">select weather type</p>
      <div className="ModalWithForm-input modal__input_type_radio">
        <div>
          <input
            type="radio"
            checked={values.weatherType === 'hot'}
            id="choiceHot"
            name="weatherType"
            value="hot"
            onChange={handleChange}
          />
          <label className="modal__label_radio" htmlFor="choiceHot">
            Hot
          </label>
        </div>
        <div>
          <input
            type="radio"
            checked={values.weatherType === 'warm'}
            id="choiceWarm"
            name="weatherType"
            value="warm"
            onChange={handleChange}
          />
          <label className="modal__label_radio" htmlFor="choiceWarm">
            Warm
          </label>
        </div>
        <div>
          <input
            type="radio"
            checked={values.weatherType === 'cold'}
            id="choiceCold"
            name="weatherType"
            value="cold"
            onChange={handleChange}
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
