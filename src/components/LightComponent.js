import React, { useState } from 'react';
import Light from '../devices/Light';

const LightComponent = ({ name }) => {
  const [isOn, setIsOn] = useState(false);
  const light = new Light(name);

  const toggleLight = () => {
    const command = isOn ? 'off' : 'on';
    light.update(command);
    setIsOn(!isOn);
  };

  return (
    <div className="device">
      <h3>{name}</h3>
      <p>Status: {isOn ? 'On' : 'Off'}</p>
      <button onClick={toggleLight} className={`button ${isOn ? 'on' : 'off'}`}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default LightComponent;
