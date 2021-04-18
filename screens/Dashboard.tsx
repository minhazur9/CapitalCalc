import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import firebase from 'firebase'

const Dashboard = () => {

    const auth = firebase.auth()

    const logOut = () => {
        auth.signOut()
            .then(() => {
                console.log('signed out')
            })
    }

    return (
        <View>
            <Text>Dashboard</Text>
            <Button onPress={() => logOut()} >
                Logout
            </Button>
        </View>
    )
}

export default Dashboard