import React from 'react';
import { useState, useContext, useEffect } from 'react';
import './Switch.css';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

const Switch = ({ isOn, handleToggle }) => {
  const { currentTemperatureUnit, handleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === 'C');
  useEffect(
    () => setIsChecked(currentTemperatureUnit === 'C'),
    [currentTemperatureUnit]
  );
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        value={currentTemperatureUnit}
      />
      <label
        style={{ background: isOn && '#fff' }}
        className="react-switch-label react-switch-label-text"
        htmlFor={`react-switch-new`}
      >
        <span className={'react-switch-label-text'}> {'F C'} </span>
        <span className={'react-switch-button'}>{currentTemperatureUnit}</span>
      </label>
    </>
  );
};

export default Switch;
