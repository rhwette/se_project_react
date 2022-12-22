import React, { Component, useState, useContext } from 'react';
import './Header.css';
import logoPath from '../../images/wtwr°.jpg';
import avatarPath from '../../images/avatar-default2.jpg';
import {
  getForecastWeather,
  filterDataFromWeatherApi,
} from '../../utils/weatherApi';
import Switch from '../Switch/Switch';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

function Header({ currentDate, city, name, clickHandler }) {
  const [value, setValue] = useState(false);
  const contextValue = useContext(CurrentTemperatureUnitContext);
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
        <Switch
          isOn={value}
          handleToggle={() => {
            contextValue.handleSwitchChange();
            setValue(!value);
          }}
        />
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
