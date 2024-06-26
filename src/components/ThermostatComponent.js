import React, { useState } from 'react';
import Thermostat from '../devices/Thermostat';

const ThermostatComponent = ({ name }) => {
  const [temperature, setTemperature] = useState(20);
  const thermostat = new Thermostat(name);

  const handleTemperatureChange = (event) => {
    const temp = event.target.value;
    setTemperature(temp);
    thermostat.update(temp);
  };

  return (
    <div className="device">
      <h3>{name}</h3>
      <p>Temperature: {temperature}°C</p>
      <input
        type="number"
        value={temperature}
        onChange={handleTemperatureChange}
      />
    </div>
  );
};

export default ThermostatComponent;
