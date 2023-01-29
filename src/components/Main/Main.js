import React, { useContext } from 'react';
import './Main.css';
import ItemSection from '../ItemSection/ItemSection';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

function Main({
  className,
  temperature,
  clothingItemArray,
  onCardClick,
  clothingType,
}) {
  const contextValue = useContext(CurrentTemperatureUnitContext);
  temperature =
    contextValue.currentTemperatureUnit === 'F'
      ? Math.round(temperature)
      : Math.round((temperature - 32) * (5 / 9));

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
