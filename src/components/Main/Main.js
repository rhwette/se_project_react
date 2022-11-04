// Main component is a wrapper for the main content of the app

//includes....

// 1. the WeatherCard Component that shows current temp
//    weather data is sent here as well as to the 'Header' as 'props'
//    Note: weather data is not stored in 'Main.js' so need to pass it
//      down from the 'App' component

// 2. Clothing item cards, which are filtered based on current weather
//    Wrap the 'ItemCard' component into the unordered list and
//    use the filter() and map() methods

import React from 'react';
import './Main.css';
import ItemCard from '../ItemCard/ItemCard';
import WeatherCard from '../WeatherCard/WeatherCard';

function Main({ weatherData, cards, onCardClick }) {
  const actualWeather = weatherData.temperature;

  const weatherType = () => {
    if (actualWeather >= 86) {
      return 'hot';
    } else if (actualWeather >= 66 && actualWeather <= 85) {
      return 'warm';
    } else if (actualWeather <= 65) {
      return 'cold';
    }
  };

  return (
    <main className="main">
      <WeatherCard weatherData={weatherDatas} />
      <section className="main__clothes">
        <div className="main__info">
          <div className="main__description-container">
            <p className="main__description">
              Today is {actualWeather}F and it is {weatherType()}
            </p>
            <p className="main__description_slash"> / </p>
            <p className="main__description">You may want to wear:</p>
          </div>
        </div>
        <ul className="main__items">
          {cards
            .filter((card) => card.weather === weatherType())
            .map((filteredCard) => (
              <ItemCard
                key={filteredCard._id}
                card={filteredCard}
                onCardClick={onCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}
