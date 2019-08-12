import React, { Fragment } from 'react';
// tslint:disable-next-line:ordered-imports
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { createAppContainer, createBottomTabNavigator, DrawerNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import Launch from './pages/Launch';
import LoginScreen from './pages/loginScreen/loginScreen';
import RegisterScreen from './pages/register/register';
import BooksScreen from './pages/booksScreen/booksScreen';
import Drawer from './navigators/drawerNavigator';

const store = configureStore();

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Launch: { screen: Launch },
      Login: { screen: LoginScreen },
      Register: { screen: RegisterScreen },
      Books: { screen: BooksScreen }

    }
  )
);

class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <Drawer />
      </Provider>
    );

  }
}
export default App;