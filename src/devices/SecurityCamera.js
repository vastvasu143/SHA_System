import Device from './Device';

class SecurityCamera extends Device {
  constructor(name) {
    super(name);
    this.isActive = false;
  }

  update(state) {
    this.isActive = state === 'active';
    console.log(`Security Camera ${this.name} is ${this.isActive ? 'active' : 'inactive'}`);
  }
}

export default SecurityCamera;
