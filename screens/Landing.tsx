import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '40%',
        margin: 10
    },
});




const Landing = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Text>Login/Register</Text>
            <Button
                mode='contained'
                style={styles.button}
            >
                Login
            </Button>
            <Button
                mode='contained'
                style={styles.button}
            >
                Register
            </Button>


        </View>
    )
}

export default Landing