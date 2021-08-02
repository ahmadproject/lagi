import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import About from './src/screens/About';
import Splash from './src/screens/Splash';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Detail: Detail,
    About: About,
    Splash: Splash,
  },
  {
    initialRouteName: "Splash",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);


export default createAppContainer(AppNavigator);