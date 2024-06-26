// HomeStateNight.js
import HomeState from './HomeState';

class HomeStateNight extends HomeState {
  apply(controller) {
    console.log('Applying Night State');
    // Adjust devices for night mode (e.g., dim lights, adjust thermostat)
    controller.notify('night');
  }
}

export default HomeStateNight;
