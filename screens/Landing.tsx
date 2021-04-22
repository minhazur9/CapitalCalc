import React, { ReactNode } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

import { landingStyles } from '../styles';
import { LandingScreenNavigationProp } from './params/AuthStackParams';

type Props = {
    navigation: LandingScreenNavigationProp;
};


// Landing Screen
const Landing = ({ navigation }: Props) => {

    // Renders the logo
    const renderLogo = () => {
        return (
            <Image
                style={landingStyles.logo}
                source={require('../assets/CapitalCalc-Logo.png')}
            />
        )
    }

    // Renders the login and register buttons
    const renderButtons = () => {
        return (
            <>
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
            </>
        )
    }
    return (
            <View style={landingStyles.container} >
                {renderLogo()}
                {renderButtons()}
            </View>
    )
}

export default Landing