// The ItemModal Component renders the item image and title
//   this is like the zoom of the previous project

// the components accepts these props:
//   'onClose' (works like with ModalWithForm)
//   the item card data that will be rendered

import React from 'react';
import './ItemModal.css';

function ItemModal({ card, onClose }) {
  return (
    <div className="ItemModal">
      <p className="ItemModal-text"> Hello3</p>
    </div>
  );

  // return;
}

export default ItemModal;
