import React from 'react';
import { createAppContainer, createBottomTabNavigator} from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import LoginScreen from './pages/loginScreen/loginScreen';
import RegisterScreen from './pages/register/register';
import BooksScreen from './pages/BooksScreen/booksScreen';
import Drawer from './navigators/drawerNavigator';

const store = configureStore();

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
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