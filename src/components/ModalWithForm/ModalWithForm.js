//  ModalWithForm wrapper
//    is the wrapper for form compenents
//    be sure the compnent supports multiple forms
//      even tho we only create the first form at this time

//  The form should include:
//    the form title
//    the button that closes the modal
//    the <form> tag itself
//    the button that submits the modal

//  The title, button text, and form identifier (all strings)
//    should be passed from outside of the component
//    to do this...
//    add the corresponding title, name, and buttonText props
//      then substitute their values inside the JSX

//  for example, to substitue name into the CSS class of the container,
//    use this syntax:

//        className={`modal modal_type_${name}`}

//  the value fo the name props will be used for
//    the name of the CSS class container
//    and for the name attribute of the form tag

// the rest of the content (inputs and labels) will vary from form to form
//    these should be added as children of ModelWithForm
//    and then accessed via the special children prop

// One more prop is 'onCLose' which should be called
//   when the user clicks on
//    1)the close button
//    2)outside the modal content
//    1)the ESCAPE key

// create an "add clothes button" that opens the ModalWithForm Button

import React from 'react';
import './ModalWithForm.css';
import closeX from '../../images/close.svg';

function ModalWithForm({ title, name, onClose, onAddClick }) {
  // console.log('card=', card);
  // console.log('card.weather=', card.weather);

  return (
    <div className="ModalWithForm-popup">
      <div className="ModalWithForm">
        <h2>{title}</h2>
        <img
          className="ModalWithForm-close"
          onClick={onClose}
          src={closeX}
          alt="close"
        />
        {/* <p>{name}</p> */}
        <label className="modal__label">
          <input
            type="text"
            name="name"
            id="place-name"
            className="modal__input modal__input_type_card-name"
            placeholder="Title"
            required
            minLength="1"
            maxLength="30"
          />
          <span className="modal__error" id="place-name-error"></span>
        </label>
        <label className="modal__label">
          <input
            type="url"
            name="link"
            id="place-link"
            className="modal__input modal__input_type_url"
            placeholder="Image URL"
            required
          />
          <span className="modal__error" id="place-link-error"></span>
        </label>
        <p>Select the weather type:</p>
        <div className="modal__input modal__input_type_radio">
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
        {/* <p> {placeholder}</p> */}
        {/* <img className="ItemModal-image" src={src2} alt={alternate} /> */}
        {/* <p className="ModalWithForm-textItem"> {title}</p> */}
      </div>
    </div>
  );
}

export default ModalWithForm;
