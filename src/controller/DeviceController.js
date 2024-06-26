class DeviceController {
    constructor() {
      this.devices = [];
    }
  
    attach(device) {
      this.devices.push(device);
    }
  
    detach(device) {
      this.devices = this.devices.filter(d => d !== device);
    }
  
    notify(state) {
      this.devices.forEach(device => device.update(state));
    }
  }
  
  export default DeviceController;
  