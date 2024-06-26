import Command from './Command';

class SetTemperatureCommand extends Command {
  constructor(device, temperature) {
    super();
    this.device = device;
    this.temperature = temperature;
  }

  execute() {
    this.device.update(String(this.temperature));
  }
}

export default SetTemperatureCommand;
