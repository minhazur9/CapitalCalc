import React from 'react';
import { useSelector } from 'react-redux';
import { View, Dimensions, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import { VictoryPie } from 'victory-native'
import { pieChartStyles } from '../styles'
import { RootState } from '../store'

// Render pie chart
const PieChart = () => {

    const budget = useSelector((state: RootState) => state.budgetData)

    let colorScale: string[]

    let screenWidth: number

    let screenHeight: number

    let radius: number

    let innerRadius: number

    colorScale = ["#E85143", "#E8B443", "#43E88D", "#43A6E8", "#8D43E8"]

    screenWidth = Dimensions.get('window').width

    screenHeight = Dimensions.get('window').height

    if (screenWidth >= screenHeight * 0.70) radius = screenWidth / 4
    else radius = screenWidth / 3

    innerRadius = radius * (0.7)

    const formatBudgetData = (budget: any) => {
        let formattedData: String | Number = budget
        if (budget > 999999) formattedData = (budget / 1000000).toFixed(1) + 'M'
        else if (budget > 99999) formattedData = (budget / 1000).toFixed(1) + 'K'
        return formattedData
    }

    console.log(budget)

    return (
        <View style={pieChartStyles.container}>
            <TextInput style={pieChartStyles.budgetText} ><Text style={pieChartStyles.currencyText}>$</Text>{formatBudgetData(budget[0].total)}</TextInput>
            <VictoryPie
                data={budget}
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