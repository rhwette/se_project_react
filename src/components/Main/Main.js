import React from 'react';
import './Main.css';
import ItemSection from '../ItemSection/ItemSection';
// import { filterDataFromWeatherAPI } from '../../utils/weatherApi';
// import { weather } from '../../utils/weatherApi';

// import ItemCard from '../ItemCard/ItemCard';
// import WeatherCard from '../WeatherCard/WeatherCard';

// import defaultClothingItems from '../../utils/clothingItems';
import clothingItems from '../../utils/clothingItems';
import { isCompositeComponent } from 'react-dom/test-utils';
// const cards = defaultClothingItems;
const cards = clothingItems;

function Main({ icon, className, temperature, clothingItemArray }) {
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
  console.log('clothingType=', clothingType);

  console.log('clothingItemArray=', clothingItemArray);
  return (
    <div className="main">
      <div className={className}>
        <p className="main__banner-temperature">{temperature} F</p>
      </div>
      <p className="main__items">
        Today is {temperature} F / You may want to wear:
      </p>
      <ItemSection
        clothingItemArray={clothingItemArray}
        clothingType={clothingType}
      />
    </div>
  );
}
export default Main;
