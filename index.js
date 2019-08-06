
import { AppRegistry } from 'react-native';
import React from 'react';

import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import store from './src/configureStore';
import AppContainer from './src/App';

// const store = configureStore()

const RNRedux = () => (
  <Provider store = { store }>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);