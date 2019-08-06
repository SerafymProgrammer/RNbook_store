
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import UserInput from './userInput';


class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showPass: true,
//       press: false,
//     };
//     this.showPass = this.showPass.bind(this);
//   }

//   showPass() {
//     this.state.press === false
//       ? this.setState({showPass: false, press: true})
//       : this.setState({showPass: true, press: false});
//   }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" >
        <UserInput/>
        <UserInput/>
      </KeyboardAvoidingView>
    );
  }
}
export default Form;
