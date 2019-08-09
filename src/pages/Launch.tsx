import React, { Fragment } from 'react';
// tslint:disable-next-line:ordered-imports
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import { Header } from 'react-native-elements';
import { Left, Button, Icon, Title, Body, Right } from 'native-base';

class Launch extends React.Component {
    render() {
        return (
            <View >
                <Header>
                    <Left>
                        <Button onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name="menu" />
                            <Title>Menu</Title>
                        </Button>
                    </Left>
                    <Body>
                        
                    </Body>
                    <Right ><Title>HomeScreen</Title></Right>
                </Header>

                
            </View>
        );

    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});
 export default Launch;