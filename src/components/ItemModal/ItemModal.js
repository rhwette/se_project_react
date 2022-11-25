// The ItemModal Component renders the item image and title
//   this is like the zoom of the previous project

// the components accepts these props:
//   'onClose' (works like with ModalWithForm)
//   the item card data that will be rendered

import React from 'react';
import './ItemModal.css';

function ItemModal({ card, onClose }) {
  return (
    <div className="ItemModal-popup">
      {/* <div className="ItemModal-popupContainer"> */}
      <div className="ItemModal">
        <p className="ItemModal-text">
          {' '}
          need to move this to middle-center4 of page
        </p>
      </div>
      {/* </div> */}
    </div>
  );

  // return;
}

export default ItemModal;
