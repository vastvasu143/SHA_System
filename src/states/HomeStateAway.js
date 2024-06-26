// HomeStateAway.js
import HomeState from './HomeState';

class HomeStateAway extends HomeState {
  apply(controller) {
    console.log('Applying Away State');
    controller.notify('off'); // Notify devices to turn off or adjust to away mode
  }
}

export default HomeStateAway;
