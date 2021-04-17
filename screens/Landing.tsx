import React, { ReactNode } from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';

import { landingStyles } from '../styles';
import { LandingScreenNavigationProp } from './RootStackParams';

type Props = {
    navigation: LandingScreenNavigationProp;
};


const Landing: ReactNode = ({ navigation }: Props) => {
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