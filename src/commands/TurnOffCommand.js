import Command from './Command';

class TurnOffCommand extends Command {
  constructor(device) {
    super();
    this.device = device;
  }

  execute() {
    this.device.update('off');
  }
}

export default TurnOffCommand;
