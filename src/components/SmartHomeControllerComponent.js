// SmartHomeControllerComponent.js
import React, { useState } from 'react';
import LightComponent from './LightComponent';
import ThermostatComponent from './ThermostatComponent';
import SecurityCameraComponent from './SecurityCameraComponent';
import SmartHomeController from '../controller/SmartHomeController';
import HomeStateHome from '../states/HomeStateHome';
import HomeStateAway from '../states/HomeStateAway';
import HomeStateNight from '../states/HomeStateNight';

const SmartHomeControllerComponent = () => {
  const [mode, setMode] = useState('Home');
  const controller = new SmartHomeController();
  const homeStateHome = new HomeStateHome();
  const homeStateAway = new HomeStateAway();
  const homeStateNight = new HomeStateNight();

  const handleModeChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);

    switch (selectedMode) {
      case 'Home':
        controller.setState(homeStateHome);
        break;
      case 'Away':
        controller.setState(homeStateAway);
        break;
      case 'Night':
        controller.setState(homeStateNight);
        break;
      default:
        break;
    }

    controller.applyState(); // Apply the selected state to update device settings
  };

  return (
    <div className="smart-home-controller">
      <h2>Smart Home Controller</h2>
      <div>
        <label>
          Mode:
          <select value={mode} onChange={handleModeChange}>
            <option value="Home">Home</option>
            <option value="Away">Away</option>
            <option value="Night">Night</option>
          </select>
        </label>
      </div>
      <LightComponent name="Living Room Light" />
      <ThermostatComponent name="Main Thermostat" />
      <SecurityCameraComponent name="Front Door Camera" />
    </div>
  );
};

export default SmartHomeControllerComponent;
