import React from 'react';
import './Main.css';
import ItemSection from '../ItemSection/ItemSection';
import clothingItems from '../../utils/clothingItems';
const cards = clothingItems;

function Main({
  icon,
  className,
  temperature,
  clothingItemArray,
  onCardClick,
}) {
  const weatherType = () => {
    if (temperature >= 86) {
      return 'hot';
    } else if (temperature >= 66 && temperature <= 85) {
      return 'warm';
    } else if (temperature <= 65) {
      return 'cold';
    }
  };

  const clothingType = weatherType();

  return (
    <main className="main">
      <div className={className}>
        <p className="main__banner-temperature">{temperature} F</p>
      </div>
      <p className="main__items">
        Today is {temperature} F / You may want to wear:
      </p>
      <ItemSection
        clothingItemArray={clothingItemArray}
        clothingType={clothingType}
        onCardClick={onCardClick}
      />
    </main>
  );
}
export default Main;
