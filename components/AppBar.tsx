import React, { useState, useEffect } from 'react';
import { Appbar } from 'react-native-paper';
import { DrawerActions, useRoute } from '@react-navigation/native';


const AppBar = ({ navigation }: any) => {

    const route = useRoute()

    const { name } = route;

    const renderBackButton = () => {
        return (
            <>
                <Appbar.Action icon={"arrow-left"}
                    onPress={() => navigation.navigate('Landing')}
                />
            </>
        )
    }

    const renderMenuButton = () => {
        return (
            <>
                <Appbar.Action icon={"menu-open"}
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
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

