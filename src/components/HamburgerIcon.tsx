
import React from 'react'
import {Image, TouchableOpacity, Dimensions} from 'react-native'
// import Icon from "react-native-vector-icons/Ionicons";
import {View} from "react-native";
import {Button, Text} from 'native-base';
const deviceWidth = Dimensions.get("window").width;

export class Logo extends React.Component {
    render() {
        return (
            //Add your logo in the image tag
            <View style={{ flex: 0.8 }}>

            </View>
        );
    }
}

export class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress = {this.props.onPress} ><Button /><Text>Clicks</Text></TouchableOpacity>
        );
    }
}