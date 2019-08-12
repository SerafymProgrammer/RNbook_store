import { AppRegistry } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import HomeScreenRouter from './src/App';
import App from './src/App';
const store = configureStore();

const RNRedux = () => (
  <Provider store = { store }>
    <HomeScreenRouter />
  </Provider>
)

AppRegistry.registerComponent(appName, () => App);