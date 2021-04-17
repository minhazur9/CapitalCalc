import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Text } from 'react-native-paper';

import { registerStyles } from '../styles'


const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <View style={registerStyles.container} >
                <Text style={registerStyles.header}>REGISTER</Text>
                <TextInput
                    label="Username"
                    value={username}
                    style={registerStyles.textInput}
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    label="Email"
                    style={registerStyles.textInput}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label="Password"
                    style={registerStyles.textInput}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
                <TextInput
                    label="Confirm Password"
                    style={registerStyles.textInput}
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(text)}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Register