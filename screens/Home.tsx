import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { TextInput, Text, Button } from 'react-native-paper';
import firebase from 'firebase';
import Dashboard from './Dashboard';
import { CommonActions } from '@react-navigation/native';

const DrawerNav = createDrawerNavigator()


const Home = () => {

    const [active, setActive] = useState('dashboard');

    const auth = firebase.auth()

    const customDrawerContent = ({ navigation }: any) => {
        return (
            <>
                <Drawer.Section title="Menu">
                    <Drawer.Item
                        label="Dashboard"
                        active={active === 'dashboard'}
                        onPress={() => {
                            setActive('dashboard')
                            navigation.navigate("Dashboard")
                        }} />
                </Drawer.Section>

                <Drawer.Section>
                    <Drawer.Item
                        label="Logout"
                        onPress={() => {
                            auth.signOut()
                            navigation.reset({
                                routes: [{ name: 'Landing' }]
                            });
                        }} />
                </Drawer.Section>
            </>
        )
    }

    return (
        <DrawerNav.Navigator initialRouteName="Dashboard" drawerContent={props => customDrawerContent(props)} >
            <DrawerNav.Screen name="Dashboard" component={Dashboard} />
        </DrawerNav.Navigator >
    )
}




export default Home