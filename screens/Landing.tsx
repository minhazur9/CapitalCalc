import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ff5e'
    },
    text: {
        color: '#f6f6f6',
    },
    button: {
        width: '60%',
        margin: 15,
        backgroundColor: '#ffffff',
    },
    buttonText: {
        color: '#000000'
    },
    logo: {
        height: 350,
        width: 350,
    }
});




const Landing = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Image
                style={styles.logo}
                source={require('../assets/CapitalCalc-Logo.png')}
            />
            <Button
                mode='contained'
                style={styles.button}
                labelStyle={styles.buttonText}
            >
                Login
            </Button>
            <Button
                mode='contained'
                style={styles.button}
                labelStyle={styles.buttonText}
            >
                Register
            </Button>


        </View>
    )
}

export default Landing