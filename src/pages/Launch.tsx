import React, { Fragment } from 'react';
// tslint:disable-next-line:ordered-imports
import { View, Text, StyleSheet, TouchableHighlight, Button } from 'react-native';
import { Header } from 'react-native-elements';

class Launch extends React.Component {
    render() {
        return (
            <View >

                <Header
                    centerComponent={{ text: 'LAUNCHS', style: { color: '#fff', marginBottom: 10, fontFamily: 'Fantasy', fontWeight: "bold" } }}
                    containerStyle={{
                        backgroundColor: '#223b4f',
                        height: 40
                    }}
                />

                <Button
                    title="Home"
                    // tslint:disable-next-line:jsx-no-lambda
                    onPress={() => {
                        // tslint:disable-next-line:no-console
                        console.log(this.props.navigation);
                        this.props.navigation.navigate('Home'

                        )
                    }}
                />
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