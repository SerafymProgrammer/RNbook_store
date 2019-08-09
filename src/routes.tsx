
import React from 'react';
import { Button, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator, NavigationActions, StackActions } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './pages/HomeScreen/HomeScreen';
import Launch from './pages/Launch';
import LoginScreen from './pages/loginScreen/loginScreen';

 const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Launch: {
    screen: Launch,
  },
  LoginForm: {
    screen: LoginScreen,
  },
}, {
    initialRouteName: 'Home',
  });

  // tslint:disable-next-line:no-empty
//  let showAndHideMenuBar(HideShow: boolean) { 
   
    
//   } 
export default AppNavigator;
// createAppContainer(AppNavigator);