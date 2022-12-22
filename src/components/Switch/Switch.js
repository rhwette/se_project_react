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
    () => setIsChecked(currentTemperatureUnit === 'CC'),
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
        style={{ background: isOn && '#06D6A0' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
