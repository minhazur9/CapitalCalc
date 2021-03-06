import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Text, Button, IconButton } from 'react-native-paper';
import { RegisterScreenNavigationProp } from './params/AuthStackParams';
import firebase from 'firebase';
import { registerStyles } from '../styles';
import AppBar from '../components/AppBar';

type Props = {
    navigation: RegisterScreenNavigationProp;
};



// Register Screen
const Register = ({ navigation }: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [passwordConfirmError, setPasswordConfirmError] = useState(false)
    const [duplicateEmailError, setDuplicateEmailError] = useState(false)

    const auth = firebase.auth()

    // Run validation check and create a new user in firebase auth
    const signUp = () => {
        if (password !== passwordConfirm) setPasswordConfirmError(true)
        else {
            auth.createUserWithEmailAndPassword(email, password)
                .then((result) => {
                    console.log(result)
                    navigation.reset({
                        routes: [{ name: 'Home' }]
                    });
                })
                .catch((error) => {
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            setDuplicateEmailError(true)
                            break;
                        case 'auth/invalid-email':
                            setEmailError(true)
                            break;
                        case 'auth/weak-password':
                            setPasswordError(true)
                            break;
                        default:
                            console.log(error)
                    }
                    console.log(error);
                })
        }
    }

    // Reset error states
    const resetErrors = () => {
        setDuplicateEmailError
        setEmailError(false)
        setPasswordError(false)
        setPasswordConfirmError(false)
        console.log(passwordError)
    }

    // Render error messages
    const renderErrorMessages = () => {
        if (emailError) return <Text style={registerStyles.errorMessage}>Invalid Email!</Text>
        else if (passwordError) return <Text style={registerStyles.errorMessage}>Password must be at least 6 characters long!</Text>
        else if (passwordConfirmError) return <Text style={registerStyles.errorMessage} >Passwords do not match!</Text>
        else if (duplicateEmailError) return <Text style={registerStyles.errorMessage} >Email already in use!</Text>
    }

    // Render registration form
    const renderForm = () => {
        return (
            <>
                <TextInput
                    label="Email"
                    keyboardType='email-address'
                    style={registerStyles.textInput}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    onFocus={() => resetErrors()}
                />
                <TextInput
                    label="Password"
                    style={registerStyles.textInput}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    onFocus={() => resetErrors()}
                />
                <TextInput
                    label="Confirm Password"
                    secureTextEntry={true}
                    style={registerStyles.textInput}
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(text)}
                    onFocus={() => resetErrors()}
                />
                <Button
                    mode='contained'
                    style={registerStyles.button}
                    labelStyle={registerStyles.buttonText}
                    onPress={() => signUp()}
                >
                    Sign up
                </Button>
            </>
        )
    }

    return (
        <>
            <AppBar navigation={navigation} />
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
            }} >
                <View style={registerStyles.container} >
                    <Text style={registerStyles.header}>REGISTER</Text>
                    {renderErrorMessages()}
                    {renderForm()}
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default Register