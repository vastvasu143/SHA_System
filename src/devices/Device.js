export default class Device {
    constructor(name) {
      this.name = name;
    }
  
    update(state) {
      throw new Error("Method 'update()' must be implemented.");
    }
  }
  