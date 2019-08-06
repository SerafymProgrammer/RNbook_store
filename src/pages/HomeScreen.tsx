
import React from 'react';
import {  View } from 'react-native';
import { Button, Header, Text } from 'react-native-elements';




class HomeScreen extends React.Component {
 
  render() {
    
    return (
      <View >
        <Header
          centerComponent={{ text: 'HOME', style: { color: '#fff', marginBottom:10, fontFamily: 'Fantasy', fontWeight: "bold" } }}
          containerStyle={{
            backgroundColor: '#223b4f',
            height: 40
          }}
        />
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          // tslint:disable-next-line:jsx-no-lambda
          onPress={() => {
            this.props.navigation.navigate('Launch' )
          }}
        />

        <Button
          title="Go to LoginScreen"
          // tslint:disable-next-line:jsx-no-lambda
          onPress={() => {
            this.props.navigation.navigate('Login')
          }}
        />
      </View>
    );
  }
}

  export default HomeScreen;