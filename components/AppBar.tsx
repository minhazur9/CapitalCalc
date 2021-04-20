import React, { useState, useEffect } from 'react';
import { Appbar } from 'react-native-paper';
import { DrawerActions, useRoute } from '@react-navigation/native';


const AppBar = ({ navigation }: any) => {

    const route = useRoute()

    return (
        <Appbar.Header statusBarHeight={20}>
            <Appbar.Action icon="menu-open"
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
            <Appbar.Content title={route.name} />
        </Appbar.Header>
    )

}

export default AppBar;

