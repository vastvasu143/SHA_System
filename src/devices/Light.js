import Device from './Device';

class Light extends Device {
  constructor(name) {
    super(name);
    this.isOn = false;
  }

  update(state) {
    this.isOn = state === 'on';
    console.log(`Light ${this.name} is ${this.isOn ? 'on' : 'off'}`);
  }
}

export default Light;
