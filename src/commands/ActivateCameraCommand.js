import Command from './Command';

class ActivateCameraCommand extends Command {
  constructor(device) {
    super();
    this.device = device;
  }

  execute() {
    this.device.update('active');
  }
}

export default ActivateCameraCommand;
