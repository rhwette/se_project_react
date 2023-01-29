import React from 'react';
import { useState, useContext, useEffect } from 'react';
import './ToggleSwitch.css';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

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
        className="react-toggleswitch-checkbox"
        id={`react-toggleswitch-new`}
        type="checkbox"
        value={currentTemperatureUnit}
      />
      <label
        style={{ background: isOn && '#fff' }}
        className="react-toggleswitch-label react-toggleswitch-label-text"
        htmlFor={`react-toggleswitch-new`}
      >
        <span className={'react-toggleswitch-label-text'}> {'F C'} </span>
        <span className={'react-toggleswitch-button'}>
          {currentTemperatureUnit}
        </span>
      </label>
    </>
  );
};

export default ToggleSwitch;
