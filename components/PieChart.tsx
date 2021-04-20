import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { VictoryPie } from 'victory-native'
import { dashboardStyles } from '../styles'

const PieChart = () => {

    const [budget, setBudget] = useState('2000')
    const [budgetData, setBudgetData] = useState<category[]>([])

    type category = {
        x: string,
        y: number
    }

    let data: category[]

    let colorScale: string[]

    let innerRadius: number

    data = [
        {
            x: 'REN',
            y: 500
        },
        {
            x: 'GRO',
            y: 200
        },
        {
            x: 'ELE',
            y: 100
        },
        {
            x: 'HOM',
            y: 400
        },
        {
            x: "RE",
            y: 900
        }
    ]

    colorScale = ["#E85143", "#E8B443", "#43E88D", "#43A6E8", "#8D43E8"]

    innerRadius = 80

    useEffect(() => {
        setBudgetData(data)
    }, [])

    return (
        <View style={dashboardStyles.pieContainer}>
            <Text style={dashboardStyles.budgetText} >{budget}</Text>
            <VictoryPie
                data={budgetData}
                innerRadius={80}
                labelRadius={() => innerRadius + 60}
                style={{
                    labels: { fontSize: 10, fontFamily: 'montserrat-light', padding: 10, }
                }}
                labelPlacement='perpendicular'
                radius={130}
                padAngle={3}
                colorScale={colorScale}
            />
        </View>
    )
}

export default PieChart