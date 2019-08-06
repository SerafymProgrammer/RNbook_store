    
import PropTypes from 'prop-types';
import React, {Component} from 'react';

// tslint:disable-next-line:ordered-imports
import {StyleSheet, View, TextInput, Image} from 'react-native';


 class UserInput extends Component {
    render() {
      return (
        <View>
          <TextInput
            placeholder='login'
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
        </View>
      );
    }
  }
  export default UserInput;