import Light from './Light';
import Thermostat from './Thermostat';
import SecurityCamera from './SecurityCamera';

class DeviceFactory {
  static createDevice(type, name) {
    switch (type.toLowerCase()) {
      case 'light':
        return new Light(name);
      case 'thermostat':
        return new Thermostat(name);
      case 'securitycamera':
        return new SecurityCamera(name);
      default:
        throw new Error(`Unknown device type: ${type}`);
    }
  }
}

export default DeviceFactory;
