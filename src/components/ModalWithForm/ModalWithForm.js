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

function ModalWithForm({ title, name, onClose }) {
  // console.log('card=', card);
  // console.log('card.weather=', card.weather);

  return (
    <div className="ModalWithForm-popup">
      <div className="ModalWithForm">
        <img
          className="ModalWithForm-close"
          //   onClick={onClose}
          src={closeX}
          alt="close"
        />
        {/* <img className="ItemModal-image" src={src2} alt={alternate} /> */}
        {/* <p className="ModalWithForm-textItem"> {title}</p> */}
      </div>
    </div>
  );
}

export default ModalWithForm;
