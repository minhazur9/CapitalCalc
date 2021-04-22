import React, { useState, useEffect } from 'react';
import { Appbar } from 'react-native-paper';
import { DrawerActions, useRoute } from '@react-navigation/native';


// Custom Header
const AppBar = ({ navigation: { goBack, dispatch } }: any) => {

    const route = useRoute()

    const { name } = route;

    // Renders the back button to go back to previous screen
    const renderBackButton = () => {
        return (
            <>
                <Appbar.Action icon={"arrow-left"}
                    onPress={() => goBack('Landing')}
                />
            </>
        )
    }

    // Renders the menu button to toggle the drawer
    const renderMenuButton = () => {
        return (
            <>
                <Appbar.Action icon={"menu-open"}
                    onPress={() => dispatch(DrawerActions.toggleDrawer())}
                />

            </>
        )
    }

    return (
        <Appbar.Header statusBarHeight={25}>
            {name === 'Login' || name === 'Register' ? renderBackButton() : renderMenuButton()}
            <Appbar.Content title={route.name} />
        </Appbar.Header>
    )

}

export default AppBar;

