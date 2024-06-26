import Command from './Command';

class TurnOnCommand extends Command {
  constructor(device) {
    super();
    this.device = device;
  }

  execute() {
    this.device.update('on');
  }
}

export default TurnOnCommand;
