import React, { useState } from 'react';
import './ClothesCard.css';

function ClothesCard({
  ClothesCardData,
  onCardClick,
  onCardDelete,
  onAddNewClick,
}) {
  const src = ClothesCardData.imageUrl;
  const alternate = ClothesCardData.name;
  const title = ClothesCardData.name;

  function handleClick() {
    onCardClick(ClothesCardData, true);
  }

  return (
    <div className="clothes__container" onClick={handleClick}>
      <h2 className="clothes__title"> {title} </h2>
      <img className="clothes__image" src={src} alt={alternate} />
    </div>
  );
}

export default ClothesCard;
