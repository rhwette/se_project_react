import { useState, useContext, useEffect } from 'react';
import './ToggleSwitch.css';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === 'CC');
  useEffect(
    () => setIsChecked(currentTemperatureUnit === 'CC'),
    [currentTemperatureUnit]
  );

  return (
    <div className="switch">
      <label className="toggle-switch__label">
        <input
          className="toggle-switch__checkbox toggle-switch__checkbox_state_hidden"
          type="checkbox"
          name="toggle-switch-checkbox"
          value={currentTemperatureUnit}
          onChange={handleToggleSwitchChange}
          checked={isChecked}
        />
        temperature unit
        {/* <span className="toggle-switch__checkbox toggle-switch__checkbox_state_visible" /> */}
      </label>
    </div>
  );
};

export default ToggleSwitch;
