import React, { useContext } from 'react';
import './Main.css';
import ItemSection from '../ItemSection/ItemSection';
import clothingItems from '../../utils/clothingItems';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
const cards = clothingItems;

function Main({
  icon,
  className,
  temperature,
  clothingItemArray,
  onCardClick,
}) {
  const contextValue = useContext(CurrentTemperatureUnitContext);
  console.log('contextValue=', contextValue);

  temperature =
    contextValue.currentTemperatureUnit === 'F'
      ? Math.round(temperature)
      : Math.round((temperature - 32) * (5 / 9));
  const weatherType = () => {
    if (contextValue.currentTemperatureUnit === 'F') {
      if (temperature >= 86) {
        return 'hot';
      } else if (temperature >= 66 && temperature <= 85) {
        return 'warm';
      } else if (temperature <= 65) {
        return 'cold';
      }
    } else if (contextValue.currentTemperatureUnit === 'C') {
      if (temperature >= 30) {
        return 'hot';
      } else if (temperature >= 19 && temperature <= 29) {
        return 'warm';
      } else if (temperature <= 18) {
        return 'cold';
      }
    }
  };

  const clothingType = weatherType();

  return (
    <main className="main">
      <div className={className}>
        <p className="main__banner-temperature">
          {temperature} {contextValue.currentTemperatureUnit}
        </p>
      </div>
      <p className="main__items">
        Today is {temperature} {contextValue.currentTemperatureUnit} / You may
        want to wear:
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
