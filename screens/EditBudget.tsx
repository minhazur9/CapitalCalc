import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { editBudgetStyles } from '../styles';

import AppBar from '../components/AppBar'

const EditBudget = ({ navigation }) => {
    return (
        <>
            <AppBar navigation={navigation} />
            <View style={editBudgetStyles.container} >
                <Text>Edit Budget</Text>
            </View>
        </>
    )
}

export default EditBudget