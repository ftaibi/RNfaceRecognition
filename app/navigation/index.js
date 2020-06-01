import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../../views/home';

const screens = createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: { title: 'My app' },
      },

    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        gestureEnabled: false,
      },
    }
  );    
  export default createAppContainer(screens);