import React from 'react';
import './Main.css';
import ItemSection from '../ItemSection/ItemSection';

// import ItemCard from '../ItemCard/ItemCard';
// import WeatherCard from '../WeatherCard/WeatherCard';

// import defaultClothingItems from '../../utils/clothingItems';
import clothingItems from '../../utils/clothingItems';
// const cards = defaultClothingItems;
const cards = clothingItems;

function Main({ icon, className, temperature }) {
  return (
    <div className="main">
      <div className={className}>
        <p className="main__banner-temperature">{temperature} F</p>
      </div>
      <p className="main__items">
        Today is {temperature} F / You may want to wear:
      </p>
      <ItemSection />
    </div>
  );
}
export default Main;
