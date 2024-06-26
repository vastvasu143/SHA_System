// SmartHomeController.js
import DeviceController from './DeviceController';

class SmartHomeController extends DeviceController {
  constructor() {
    super();
    this.state = null;
  }

  setState(state) {
    this.state = state;
  }

  applyState() {
    if (this.state) {
      this.state.apply(this);
    }
  }
}

export default SmartHomeController;
