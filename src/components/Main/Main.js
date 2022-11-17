import React from 'react';
import './Main.css';
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
        <p className="main__banner-temperature">Temp Today = {temperature}</p>
      </div>
      <p className="main__items">here is where the cards go</p>
    </div>
  );
}
export default Main;
