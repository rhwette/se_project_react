import React from 'react';
import './ItemSection.css';
import ItemCard from '../ItemCard/ItemCard';

function ItemSection({ clothingItemArray, clothingType, onCardClick }) {
  // console.log('clothingItemArray=', clothingItemArray);
  // console.log('clothingType=', clothingType);

  // return (
  //   <div>
  //     {people.filter(person => person.age < 60).map(filteredPerson => (
  //       <li>
  //         {filteredPerson.name}
  //       </li>
  //     ))}
  //   </div>
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
