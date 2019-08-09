import { ConnectedRouter } from 'connected-react-router';

import React, {Fragment} from 'react';
// tslint:disable-next-line:ordered-imports
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { createAppContainer, createBottomTabNavigator, DrawerNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore from './configureStore';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import Launch from './pages/Launch';
import LoginScreen from './pages/loginScreen/loginScreen';
import RegisterScreen from './pages/register/register';
import AppNavigator from './routes'
import { ApplicationState } from './store';
import  BooksScreen from './pages/booksScreen/booksScreen';
import SideBar from './components/SideBar';
import HamburgerIcon from './components/HamburgerIcon';
import Drawer from './navigators/drawerNavigator';



const store = configureStore();

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Launch: { screen: Launch },
      Login: {screen: LoginScreen},
      Register: {screen: RegisterScreen},
      Books: {screen: BooksScreen}

    }

  )
);



// class CustomDrawer extends React.Component {
//   render () {
//     return (
//       <Router/>
//     );
//   }
// }


// const HomeScreenRouter =createAppContainer( createDrawerNavigator(
//   {
//     Home: { screen: HomeScreen },
//     Launch: { screen: Launch },
//     Login: { screen: LoginScreen },
//     Register: { screen: RegisterScreen },
//     Books: { screen: BooksScreen }
//   },
//   {
//     contentComponent: props => <SideBar {...props} />,
//     initialRouteName: 'Home',
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToggleRoute: 'DrawerToggle'
//   }
// ));



// interface MainProps {
//   store: Store<ApplicationState>
//   history: History
// }


// tslint:disable-next-line:no-any
// const initialState = window.initialReduxState
// const store = configureStore( history)
class App extends React.Component {

  
  render() {
    // tslint:disable-next-line:no-unused-expression
    return (
    <Provider store = { store }>
      <Drawer />
    </Provider>
    );

    }
}

 export default App;