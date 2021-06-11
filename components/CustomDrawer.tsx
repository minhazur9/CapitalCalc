import React, { useState } from 'react'
import { Drawer } from 'react-native-paper'
import { HomeNavigationProp } from '../screens/params/HomeDrawerParams'
import firebase from 'firebase'
import { drawerStyles } from '../styles'

type Props = {
    navigation: HomeNavigationProp;
};


const CustomDrawer = ({ navigation }: Props) => {

    const auth = firebase.auth()

    const [active, setActive] = useState('dashboard');

    return (
        < >
            <Drawer.Section title="Menu" style={drawerStyles.container} >
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
                        navigation.navigate("Edit Budget")
                    }} />
            </Drawer.Section>

            <Drawer.Section
                style={drawerStyles.options}>
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

export default CustomDrawer