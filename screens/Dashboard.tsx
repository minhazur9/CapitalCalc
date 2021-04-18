import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { DashboardNavigationProp } from './params/HomeDrawerParams';
import firebase from 'firebase'

type Props = {
    navigation: DashboardNavigationProp;
};

const Dashboard = ({ navigation }: Props) => {

    return (
        <View>
            <Text>Dashboard</Text>
        </View>
    )
}

export default Dashboard