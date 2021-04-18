import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { LoginScreenNavigationProp } from './AuthStackParams';
import firebase from 'firebase';

import { loginStyles } from '../styles';

type Props = {
    navigation: LoginScreenNavigationProp;
};


const Login = ({ navigation }: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const auth = firebase.auth()

    const logIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(cred => {
                console.log(cred)
                navigation.navigate('Dashboard')
            })
            .catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        setEmailError(true)
                    case 'auth/wrong-password':
                        setPasswordError(true)
                    default:
                        console.log(error)
                }
            })
    }

    const errorMessages = () => {
        if(emailError || passwordError) return <Text style={loginStyles.errorMessage} >Invalid email or password!</Text>
    }

    const resetErrors = () => {
        setEmailError(false)
        setPasswordError(false)
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
            resetErrors()
        }} >
            <View style={loginStyles.container} >
                <Text style={loginStyles.header} >LOG IN</Text>
                {errorMessages()}
                <TextInput
                    label="Email"
                    style={loginStyles.textInput}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label="Password"
                    secureTextEntry={true}
                    style={loginStyles.textInput}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Button
                    mode='contained'
                    style={loginStyles.button}
                    labelStyle={loginStyles.buttonText}
                    onPress={() => logIn()}
                >
                    Login
                </Button>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login