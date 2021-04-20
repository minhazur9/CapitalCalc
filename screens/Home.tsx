import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import EditBudget from './EditBudget';
import CustomDrawer from '../components/CustomDrawer'

const DrawerNav = createDrawerNavigator()

const Home = (props: any) => {

    return (
        <>
            <DrawerNav.Navigator initialRouteName="Dashboard" drawerContent={() => <CustomDrawer navigation={props.navigation} />} >
                <DrawerNav.Screen name="Dashboard" component={Dashboard} />
                <DrawerNav.Screen name="EditBudget" component={EditBudget} />
            </DrawerNav.Navigator >
        </>
    )
}

export default Home