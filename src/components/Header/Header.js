import React, { Component, useState } from 'react';
import './Header.css';
import logoPath from '../../images/wtwr°.jpg';
import avatarPath from '../../images/avatar-default2.jpg';
import {
  getForecastWeather,
  filterDataFromWeatherApi,
} from '../../utils/weatherApi';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Switch from '../Switch/Switch';

function Header({ currentDate, city, name, clickHandler }) {
  const [value, setValue] = useState(false);
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
        {/* <ToggleSwitch /> */}
        <Switch isOn={value} handleToggle={() => setValue(!value)} />
        <button onClick={clickHandler} className="header__button">
          + Add clothes
        </button>

        {/* <button
          onClick={clickHandler}
          className="switch switch-input slider slider:before"
        ></button> */}
        {/* <div className="custom-checkbox "> */}
        {/* <div className="container ">
          <input
            className=" inputStatus"
            className="input"
            id="status"
            type="checkbox"
            name="status"
          />
          <label htmlFor="status">
            <div className="input" data-unchecked="Off" data-checked="On"></div>
            <div className="input"></div>
          </label>
        </div> */}

        <p className="header__contentRight"> {name}</p>
        <img src={avatarPath} alt="avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
