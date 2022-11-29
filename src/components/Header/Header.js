import React, { Component } from 'react';
import './Header.css';
import logoPath from './wtwr°.jpg';
import avatarPath from './avatar-default2.jpg';
import {
  getForecastWeather,
  filterDataFromWeatherAPI,
} from '../../utils/weatherApi';

function Header({ currentDate, city, name, clickHandler }) {
  return (
    <header className="header">
      <div className="header__containerLeft">
        <img src={logoPath} alt="logo" className="header__logo" />
      </div>
      <div className="header__containerCenter">
        <p className="header__contentCenter">
          {currentDate}, {city}
        </p>
      </div>
      <div className="header__containerRight">
        <button onClick={clickHandler} className="header__button">
          + Add clothes
        </button>
        <p className="header__contentRight"> {name}</p>
        <img src={avatarPath} alt="avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
