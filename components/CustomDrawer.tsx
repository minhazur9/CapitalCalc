import React, { useState } from 'react'
import { View } from 'react-native'
import { Drawer } from 'react-native-paper'
import { HomeNavigationProp } from '../screens/params/HomeDrawerParams'
import firebase from 'firebase'

type Props = {
    navigation: HomeNavigationProp;
};


const CustomDrawer = ({navigation}: Props) => {

    const auth = firebase.auth()

    const [active, setActive] = useState('dashboard');

    return (
        <View >
            <Drawer.Section title="Menu" >
                <Drawer.Item
                    label="Dashboard"
                    active={active === 'dashboard'}
                    onPress={() => {
                        setActive('dashboard')
                        navigation.navigate("Dashboard")
                    }} />
                <Drawer.Item
                    label="Edit Budget"
                    active={active === 'editBudget'}
                    onPress={() => {
                        setActive('editBudget')
                        navigation.navigate("EditBudget")
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
        </View>
    )
}

export default CustomDrawer