import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { dashboardStyles } from '../styles'
import AppBar from '../components/AppBar'
import PieChart from '../components/PieChart'

// Dashboard screen
const Dashboard = (props: any) => {

    return (
        <>
            <AppBar navigation={props.navigation} />
            <View style={dashboardStyles.container} >
                <PieChart />
            </View >
        </>
    )
}

export default Dashboard