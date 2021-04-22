import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { EditBudgetNavigationProp } from './params/HomeDrawerParams'
import { editBudgetStyles } from '../styles';
import AppBar from '../components/AppBar'

type Props = {
    navigation: EditBudgetNavigationProp;
};

const EditBudget = ({ navigation }: Props) => {
    const [budgetData, setBudgetData] = useState(0)
    const [categories, setCategories] = useState<categoryData[]>([])

    type categoryData = {
        symbol: string,
        title: string,
        amount: number
    }

    const data = [{
        symbol: 'REN',
        title: 'Rent',
        amount: 500
    }]

    useEffect(() => {
        setCategories(data)
    }, [])

    const remainingBudgetData = () => {
        const { symbol } = data[0]
        return (
            <View style={editBudgetStyles.Item} >
                <View style={editBudgetStyles.symbolColumn}>
                    <Text>{symbol}</Text>
                </View>
            </View>
        )
    }

    const renderColumns = () => {
        return (
            <View style={editBudgetStyles.columns} >
                <View style={editBudgetStyles.firstColumn}>
                    <Text style={editBudgetStyles.columnText}>SYMBOL</Text>
                </View>

                <View style={editBudgetStyles.secondColumn} >
                    <Text style={editBudgetStyles.columnText}>TITLE</Text>
                </View>

                <View style={editBudgetStyles.thirdColumn}>
                    <Text style={editBudgetStyles.columnText}>AMOUNT</Text>
                </View>
            </View>
        )
    }

    return (
        <>
            <AppBar navigation={navigation} />
            <View style={editBudgetStyles.container} >
                {renderColumns()}
            </View>
            
            <View style={editBudgetStyles.itemList} >
                {remainingBudgetData()}
            </View>
        </>
    )
}

export default EditBudget