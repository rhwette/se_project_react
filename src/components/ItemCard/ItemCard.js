import React from 'react';
import './ItemCard.css';

function ItemCard({ ItemCardData, onCardClick }) {
  const src2 = ItemCardData.link;
  const alternate = ItemCardData.name;
  const title = ItemCardData.name;

  function handleClick() {
    onCardClick(ItemCardData);
  }

  return (
    <div className="ItemContainer" onClick={handleClick}>
      <h2 className="ItemCard__title"> {title}</h2>
      <img className="ItemCard__image" src={src2} alt={alternate} />
    </div>
  );
}

export default ItemCard;
