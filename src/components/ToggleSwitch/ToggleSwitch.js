import { useState, useContext, useEffect } from 'react';
import './ToggleSwitch.css';
import CurrentTempUnitContext from '../../contexts/CurrentTempUnitContext';

//see @author [Shraddha](https://github.com/Shraddha)

// <!-- Rounded switch -->
{/* <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label> */}

const ToggleSwitch = () => {
  const { currentTempUnit, handleToggleSwitchChange } = useContext(
    CurrentTempUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTempUnit === 'C');
  useEffect(() => setIsChecked(currentTempUnit === 'C'), [currentTempUnit]);

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">
        <input
          className="toggle-switch_checkbox toggle-switch__checkbox_state_hidden"
          type="checkbox"
          name="toggle-switch-checkbox"
          value={currentTempUnit}
          onChange={handleToggleSwitchChange}
          checked={isChecked}
        />
        <span className="toggle-switch__checkbox toggle-switch__checkbox_state_visible" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
