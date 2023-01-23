import React, { useContext } from 'react';
import './ClothesSection.css';
import ClothesCard from '../ClothesCard/ClothesCard';
import '../Profile.css';
// import ItemSection from '../../ItemSection/ItemSection';

function ClothesSection({
  clothingItemArray,
  clothingType,
  // className,
  // temperature,
  onCardClick,
  onCardDelete,
  onAddNewClick,
}) {
  console.log('inside clothesSection');

  return (
    <div className="clothesSection">
      <p className="clothesSection__text">Your clothes include:</p>
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
