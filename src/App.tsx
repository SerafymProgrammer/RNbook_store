import { ConnectedRouter } from 'connected-react-router';
import { createHashHistory, History } from 'history'
import React, {Fragment} from 'react';
// tslint:disable-next-line:ordered-imports
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore from './configureStore';
import HomeScreen from './pages/HomeScreen';
import Launch from './pages/Launch';
import LoginScreen from './pages/loginScreen/loginScreen';
import RegisterScreen from './pages/register';
import AppNavigator from './routes'
import { ApplicationState } from './store';

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Launch: { screen: Launch },
      Login: {screen: LoginScreen},
      Register: {screen: RegisterScreen},

    }

  )
);

interface MainProps {
  store: Store<ApplicationState>
  history: History
}

const history = createHashHistory()

// tslint:disable-next-line:no-any
// const initialState = window.initialReduxState
// const store = configureStore( history)
class App extends React.Component {

  
  render() {
    // tslint:disable-next-line:no-unused-expression
    return (


    //  <Provider store={store}>
    //    <ConnectedRouter history={history}>
          <AppContainer />
    //    </ConnectedRouter>
    //  </Provider>
    );

    }
}
 

 export default AppContainer;