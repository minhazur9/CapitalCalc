import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Text, Button, IconButton } from 'react-native-paper';
import { LoginScreenNavigationProp } from './params/AuthStackParams';
import AppBar from '../components/AppBar'
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
    const [serverError, setServerError] = useState(false)

    const auth = firebase.auth()

    const logIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(cred => {
                setEmail('')
                setPassword('')
                console.log(cred)
                navigation.reset({
                    routes: [{ name: 'Home' }]
                });
            })
            .catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        setPassword('')
                        setEmailError(true)
                    case 'auth/wrong-password':
                        setPassword('')
                        setPasswordError(true)
                    default:
                        setPassword('')
                        setServerError(true)
                }
            })
    }

    const errorMessages = () => {
        if (emailError || passwordError) return <Text style={loginStyles.errorMessage} >Invalid email or password!</Text>
        else if (serverError) return <Text style={loginStyles.errorMessage} >There was a problem with logging in! Please try again</Text>

    }

    const resetErrors = () => {
        setServerError(false)
        setEmailError(false)
        setPasswordError(false)
    }

    const renderForm = () => {
        return (
            <>
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
            </>
        )
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
            resetErrors()
        }} >
            <>
            <AppBar navigation={navigation} />
            <View style={loginStyles.container} >
                <Text style={loginStyles.header} >LOG IN</Text>
                {errorMessages()}
                {renderForm()}
            </View>
            </>
        </TouchableWithoutFeedback>
    )
}

export default Login