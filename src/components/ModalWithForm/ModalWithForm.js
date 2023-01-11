import React from 'react';
import './ModalWithForm.css';
import closeX from '../../images/close.svg';

function ModalWithForm({ title, buttonLabel, onClose, children, onSubmit }) {
  return (
    <div className="ModalWithForm-popup">
      <form className="ModalWithForm" onSubmit={onSubmit}>
        <p className="ModalWithForm-heading">{title}</p>
        <img
          className="ModalWithForm-close"
          onClick={onClose}
          src={closeX}
          alt="close"
        />
        {children}
        <button className="ModalWithForm-button" type="submit">
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}

export default ModalWithForm;
