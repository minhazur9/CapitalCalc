import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import firebase from 'firebase'

import { loginStyles } from '../styles'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logIn = () => {

    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }} >
            <View style={loginStyles.container} >
                <Text style={loginStyles.header} >LOG IN</Text>
                <TextInput
                    label="Email"
                    style={loginStyles.textInput}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label="Password"
                    style={loginStyles.textInput}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Button
                    mode='contained'
                    style={loginStyles.button}
                    labelStyle={loginStyles.buttonText}
                >
                    Login
                </Button>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login