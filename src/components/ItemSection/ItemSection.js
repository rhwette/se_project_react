import React from 'react';
import './ItemSection.css';
import ItemCard from '../ItemCard/ItemCard';
import ItemModal from '../ItemModal/ItemModal';

function ItemSection({ clothingItemArray, clothingType, onCardClick }) {
  return (
    <div className="ItemSection">
      {clothingItemArray
        .filter((ItemCardData) => ItemCardData.weather === clothingType)
        .map((filteredItem, index) => (
          <ItemCard
            ItemCardData={filteredItem}
            key={index}
            onCardClick={onCardClick}
          />
        ))}
    </div>
  );
}

export default ItemSection;
