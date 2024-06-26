// HomeStateHome.js
import HomeState from './HomeState';

class HomeStateHome extends HomeState {
  apply(controller) {
    console.log('Applying Home State');
    controller.notify('on'); // Notify devices to turn on or adjust to home mode
  }
}

export default HomeStateHome;
