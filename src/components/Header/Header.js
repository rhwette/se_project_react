import React, { Component, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoPath from '../../images/wtwr°.jpg';
import avatarPath from '../../images/avatar-default2.jpg';
import {
  getForecastWeather,
  filterDataFromWeatherApi,
} from '../../utils/weatherApi';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

const currentDate = new Date().toLocaleString('default', {
  month: 'long',
  day: 'numeric',
  time: 'numeric',
});

function Header({ city, name, clickHandler }) {
  const [value, setValue] = useState(false);
  const contextValue = useContext(CurrentTemperatureUnitContext);
  return (
    <header className="header">
      <div className="header__containerLeft">
        <Link to="/se_project_react">
          <img src={logoPath} alt="logo" className="header__logo" />
        </Link>
      </div>
      <div className="header__containerCenter">
        <p className="header__contentCenter">
          {currentDate}, {city}
        </p>
      </div>
      <div className="header__containerRight">
        <ToggleSwitch
          isOn={value}
          handleToggle={() => {
            contextValue.handleToggleSwitchChange();
            setValue(!value);
          }}
        />
        <button onClick={clickHandler} className="header__button">
          + Add clothes
        </button>

        <Link to="/se_project_react/profile">
          <p className="header__text"> {name}</p>
        </Link>
        <img src={avatarPath} alt="avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
