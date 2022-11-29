import React from 'react';
import './ItemModal.css';
import closeX from '../../images/close.svg';

function ItemModal({ card, onClose }) {
  const src2 = card.link;
  const alternate = card.name;
  const title = card.name;
  const weather = card.weather;
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
        <p className="ItemModal-textItem"> {title}</p>
        <p className="ItemModal-textWeather">Weather: {weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
