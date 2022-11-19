import React from 'react';
import './ItemSection.css';
import ItemCard from '../ItemCard/ItemCard';

function ItemSection({ clothingItemArray }) {
  console.log('clothingItemArray=', clothingItemArray);
  return (
    <div className="ItemSection">
      {clothingItemArray.map((ItemCardData, index) => (
        <ItemCard ItemCardData={ItemCardData} key={index} />
      ))}

      {/* <ItemCard className="ItemCard" />
      <ItemCard className="ItemCard" />
      <ItemCard className="ItemCard" />
      <ItemCard className="ItemCard" />
      <ItemCard className="ItemCard" />
      <ItemCard className="ItemCard" /> */}
    </div>
  );
}

export default ItemSection;
