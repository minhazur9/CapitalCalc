import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import { EditBudgetNavigationProp } from './params/HomeDrawerParams'
import { editBudgetStyles } from '../styles';
import AppBar from '../components/AppBar'

type Props = {
    navigation: EditBudgetNavigationProp;
};

const EditBudget = ({ navigation }: Props) => {
    const [budgetData, setBudgetData] = useState(500)
    const [costData, setCostData] = useState(0)
    const [categories, setCategories] = useState<categoryData[]>([])

    type categoryData = {
        symbol: string,
        name: string,
        amount: number
    }

    const userBudget = 2000

    const data = [{
        symbol: 'REM',
        name: 'Rent',
        amount: 500
    }]

    useEffect(() => {
        setBudgetData(userBudget)
    }, [])

    const remainingBudgetData = () => {
        const balance = budgetData - costData
        return (
            <View style={editBudgetStyles.item} >
                <View style={editBudgetStyles.symbolColumn}>
                    <Text style={editBudgetStyles.symbolData} >INFO</Text>
                </View>

                <View style={editBudgetStyles.titleColumn}>
                    <Text style={editBudgetStyles.nameData}>Income</Text>
                    <Text style={editBudgetStyles.costData}>Costs</Text>
                    <Text style={editBudgetStyles.nameData}>Balance</Text>
                </View>

                <View style={editBudgetStyles.amountColumn}>
                    <TextInput
                        keyboardType='decimal-pad'
                        style={editBudgetStyles.amountData}
                        onChangeText={number => number === '' ? setBudgetData(0) : setBudgetData(Number(number))}
                    >
                        {budgetData}
                    </TextInput>
                    <Text style={editBudgetStyles.costData}>-{costData}</Text>
                    <Text style={editBudgetStyles.amountData}>{balance}</Text>
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
                    <Text style={editBudgetStyles.columnText}>NAME</Text>
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
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                <View style={editBudgetStyles.container}>
                    <View style={editBudgetStyles.columnContainer} >
                        {renderColumns()}
                    </View>

                    <View style={editBudgetStyles.itemList} >
                        {remainingBudgetData()}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default EditBudget