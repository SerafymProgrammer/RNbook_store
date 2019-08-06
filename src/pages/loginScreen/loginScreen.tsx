
import React, {Component} from 'react';
import { Button, View } from 'react-native';
import { Header } from 'react-native-elements';
import Form from "./form";
 class LoginScreen extends Component {
  render() {
    return (
      <View> 
        <Header
          centerComponent={{ text: 'LOGIN', style: { color: '#fff', marginBottom: 10, fontFamily: 'Fantasy', fontWeight: "bold" } }}
          containerStyle={{
            backgroundColor: '#223b4f',
            height: 40
          }}
        />

        <Form />

        <Button
          title="Go to Details"
          // tslint:disable-next-line:jsx-no-lambda
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
        />
      </View>
       
    );
  }
}
export default LoginScreen; 
