import React, { ReactNode } from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';

import { landingStyles } from '../styles';
import { RegisterScreenNavigationProp } from './RootStackParams';

type Props = {
    navigation: RegisterScreenNavigationProp;
};


const Landing = ({ navigation }: any) => {
    return (
        <View style={landingStyles.container} >
            <Image
                style={landingStyles.logo}
                source={require('../assets/CapitalCalc-Logo.png')}
            />
            <Button
                mode='contained'
                style={landingStyles.button}
                labelStyle={landingStyles.buttonText}
                onPress={() => navigation.navigate('Login')}
            >
                Login
            </Button>
            <Button
                mode='contained'
                style={landingStyles.button}
                labelStyle={landingStyles.buttonText}
                onPress={() => navigation.navigate('Register')}
            >
                Register
            </Button>
        </View>
    )
}

export default Landing