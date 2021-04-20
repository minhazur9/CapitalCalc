import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { EditBudgetNavigationProp } from './params/HomeDrawerParams'
import { editBudgetStyles } from '../styles';

import AppBar from '../components/AppBar'

type Props = {
    navigation: EditBudgetNavigationProp;
};

const EditBudget = ({ navigation }: Props) => {
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