import React from 'react';
import './ClothesSection.css';
import ClothesCard from '../ClothesCard/ClothesCard';
import '../Profile.css';

function ClothesSection({
  clothingItemArray,
  clothingType,
  onCardClick,
  onCardDelete,
  onAddNewClick,
  clickHandler,
}) {
  return (
    <div className="clothesSection">
      <div className="clothesSection__headingContainer">
        <p className="clothesSection__text">Your items:</p>
        <button onClick={clickHandler} className="clothesSection__button">
          + Add new
        </button>
      </div>
      {clothingItemArray
        .filter((ClothesCardData) => ClothesCardData.weather === clothingType)
        .map((filteredItem, _id) => (
          <ClothesCard
            ClothesCardData={filteredItem}
            key={_id}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
            onAddNewClick={onAddNewClick}
          />
        ))}
    </div>
  );
}

export default ClothesSection;
