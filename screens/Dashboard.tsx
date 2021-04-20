import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { dashboardStyles } from '../styles'


import AppBar from '../components/AppBar'
import PieChart from '../components/PieChart'


const Dashboard = (props: any) => {
    const route = useRoute()
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
        <>
            <AppBar navigation={props.navigation} />
            <View style={dashboardStyles.container} >
                <PieChart />
            </View >
        </>
    )
}

export default Dashboard