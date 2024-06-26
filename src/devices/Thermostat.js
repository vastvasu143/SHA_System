import Device from './Device';

class Thermostat extends Device {
  constructor(name) {
    super(name);
    this.temperature = 20;
  }

  update(state) {
    this.temperature = parseInt(state);
    console.log(`Thermostat ${this.name} set to ${this.temperature}°C`);
  }
}

export default Thermostat;
