import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Dimensions, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import { VictoryPie } from 'victory-native'
import { pieChartStyles } from '../styles'
import { RootState } from '../store'

// Render pie chart
const PieChart = () => {

    const budget = useSelector((state: RootState) => state.budgetData)
    const [budgetData, setBudgetData] = useState<category[]>([])

    type category = {
        x: string,
        y: number
    }

    let data: category[]

    let colorScale: string[]

    let screenWidth: number

    let screenHeight: number

    let radius: number

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
            x: "REM",
            y: 900
        }
    ]

    colorScale = ["#E85143", "#E8B443", "#43E88D", "#43A6E8", "#8D43E8"]

    screenWidth = Dimensions.get('window').width

    screenHeight = Dimensions.get('window').height

    if (screenWidth >= screenHeight * 0.70) radius = screenWidth / 4
    else radius = screenWidth / 3

    innerRadius = radius * (0.7)

    useEffect(() => {
        setBudgetData(data)
    }, [])

    const formatBudgetData = (budget: any) => {
        let formattedData: String | Number = budget
        if (budget > 99999) formattedData = (budget / 1000).toFixed(1) + 'K'
        if (budget > 999999) formattedData = (budget / 1000000).toFixed(1) + 'M'
        return formattedData
    }

    return (
        <View style={pieChartStyles.container}>
            <TextInput style={pieChartStyles.budgetText} ><Text style={pieChartStyles.currencyText}>$</Text>{formatBudgetData(budget)}</TextInput>
            <VictoryPie
                data={budgetData}
                innerRadius={innerRadius}
                labelRadius={() => radius + 5}
                style={{
                    labels: { fontSize: 10, fontFamily: 'montserrat-light', padding: 10, }
                }}
                labelPlacement='perpendicular'
                radius={radius}
                padAngle={3}
                colorScale={colorScale}
            />
        </View>
    )
}

export default PieChart