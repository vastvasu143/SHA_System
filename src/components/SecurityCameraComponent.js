import React, { useState } from 'react';
import SecurityCamera from '../devices/SecurityCamera';

const SecurityCameraComponent = ({ name }) => {
  const [isActive, setIsActive] = useState(false);
  const camera = new SecurityCamera(name);

  const toggleCamera = () => {
    const command = isActive ? 'inactive' : 'active';
    camera.update(command);
    setIsActive(!isActive);
  };

  return (
    <div className="device">
      <h3>{name}</h3>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      <button onClick={toggleCamera} className={`button ${isActive ? 'active' : 'inactive'}`}>
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
};

export default SecurityCameraComponent;
