import React, { ReactNode, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { DashboardNavigationProp } from './params/HomeDrawerParams';
import { VictoryPie } from 'victory-native'

import { dashboardStyles } from '../styles'
import firebase from 'firebase'

const Dashboard: ReactNode = () => {

    const [budget, setBudget] = useState(500)

    type category = {
        x: string,
        y: number
    }

    let data: category[]

    let colorScale: string[]

    data = [
        {
            x: 'Rent',
            y: 500
        },
        {
            x: 'Groceries',
            y: 200
        },
        {
            x: 'Electric',
            y: 100
        }
    ]

    colorScale = ["#E85143", "#E8B443", "#43E88D", "#43A6E8", "#8D43E8"]

    return (
        <View
            style={dashboardStyles.container} >
            <View style={dashboardStyles.pieContainer}>
                <Text style={dashboardStyles.budgetText}>{budget}</Text>
                <VictoryPie
                    data={data}
                    radius={130}
                    innerRadius={80}
                    padAngle={5}
                    colorScale={colorScale}
                />
            </View>
        </View>
    )
}

export default Dashboard