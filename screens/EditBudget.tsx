import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import { Button, Text, Modal, Portal } from 'react-native-paper';
import { EditBudgetNavigationProp } from './params/HomeDrawerParams';
import { editBudgetStyles } from '../styles';
import AppBar from '../components/AppBar';
import { RootState } from '../store'
import { setBudgetData } from '../actions';
import { Category } from '../types/CategoryInterface';
import { PieData } from '../types/PieDataInterface';
import { min } from 'react-native-reanimated';


type Props = {
    navigation: EditBudgetNavigationProp;
};

const EditBudget = ({ navigation }: Props) => {
    const budgetData = useSelector((state: RootState) => state.budgetData)
    const [existingRows, setExistingRows] = useState<Category[]>([])
    const dispatch = useDispatch()
    const [costData, setCostData] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);
    const [symbol, setSymbol] = useState("")
    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0)

    // useEffect(() => {
    //     setBudgetData(userBudget)
    // }, [])

    const renderBudgetData = () => {
        const balance = budgetData[0].y - costData
        return (
            <View style={editBudgetStyles.item} >
                <View style={editBudgetStyles.symbolColumn}>
                    <Text style={editBudgetStyles.symbolData}>INFO</Text>
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
                        onChangeText={number => editBudgetData(number)}
                    >
                        {budgetData[0].y}
                    </TextInput>
                    <Text style={editBudgetStyles.costData}>-{costData}</Text>
                    <Text style={editBudgetStyles.amountData}>{balance}</Text>
                </View>
            </View>
        )
    }

    const editBudgetData = (budgetAmount: String) => {
        const budgetClone = budgetData.slice()
        if (budgetAmount === '') budgetClone[0].y = 0
        else budgetClone[0].y = Number(budgetAmount)
        dispatch(setBudgetData(budgetClone))
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
                    <Text style={editBudgetStyles.columnText}>AMOUNT <Text style={editBudgetStyles.currencyText}>$</Text></Text>
                </View>
            </View>
        )
    }

    const renderAddRowButton = () => {
        return (
            <Button mode="contained" onPress={() => setModalVisible(true)} >
                Add Row
            </Button>
        )
    }

    const renderExistingRows = () => {
        if (existingRows.length > 0) {
            return existingRows.map((row: Category, index) => {
                let { symbol, name, amount } = row
                return (
                    <View key={name + amount.toString()} style={editBudgetStyles.item}>
                        <View style={editBudgetStyles.symbolColumn}>
                            <TextInput style={editBudgetStyles.symbolData}
                                onChangeText={text => symbol = text}
                                onSubmitEditing={(e) => {
                                    const existingRowsClone = existingRows.slice()
                                    const budgetDataClone = budgetData.slice()
                                    existingRowsClone[index].symbol = e.nativeEvent.text
                                    budgetDataClone[index + 1].x = e.nativeEvent.text
                                    dispatch(setBudgetData(budgetDataClone))
                                    setExistingRows(existingRowsClone)
                                }}
                            >
                                {symbol}
                            </TextInput>

                        </View>

                        <View style={editBudgetStyles.titleColumn}>
                            <TextInput style={editBudgetStyles.nameData}
                                onChangeText={text => name = text}
                            >
                                {name}
                            </TextInput>
                        </View>

                        <View style={editBudgetStyles.amountColumn}>
                            <TextInput
                                keyboardType='decimal-pad'
                                style={editBudgetStyles.amountData}
                                onChangeText={number => amount = Number(number)}
                                onSubmitEditing={(e) => {
                                    const existingRowsClone = existingRows.slice()
                                    const budgetDataClone = budgetData.slice()
                                    existingRowsClone[index].amount = Number(e.nativeEvent.text)
                                    budgetDataClone[index + 1].y = Number(e.nativeEvent.text)
                                    console.log(budgetDataClone[index+1])
                                    dispatch(setBudgetData(budgetDataClone))
                                    setExistingRows(existingRowsClone)
                                    setNewCost()
                                }}
                            >
                                {amount}
                            </TextInput>
                        </View>
                    </View>
                )
            })
        }

    }

    const addRow = (symbol: String, name: String, amount: number) => {
        setModalVisible(false)
        const budgetClone: PieData[] = budgetData.slice()
        const existingRowsClone: Category[] = existingRows.slice()
        const newRow: Category = {
            symbol,
            name,
            amount
        }
        existingRowsClone.push(newRow)
        budgetClone.push({ x: symbol, y: amount })
        dispatch(setBudgetData(budgetClone))
        setExistingRows(existingRowsClone)
        setCostData(costData + Number(amount))
    }

    const renderModal = () => {
        return (
            <Portal>
                <Modal visible={modalVisible} dismissable={false} onDismiss={() => setModalVisible(false)} contentContainerStyle={editBudgetStyles.addRowModal}>
                    <View style={editBudgetStyles.modalRowsContainer}>
                        {renderModalRow("Symbol")}
                        {renderModalRow("Name")}
                        {renderModalRow("Amount")}
                        <View style={editBudgetStyles.modalButtonContainer}>
                            <Button onPress={() => setModalVisible(false)}  >Cancel</Button>
                            <Button onPress={() => addRow(symbol, name, amount)}  >Confirm</Button>
                        </View>

                    </View>
                </Modal>
            </Portal>
        )
    }

    const renderModalRow = (category: String) => {
        return (
            <View style={editBudgetStyles.modalRow}>
                <Text style={editBudgetStyles.modalRowText}>{category}</Text>
                {category === 'Amount' && <TextInput placeholder="Enter Amount" style={editBudgetStyles.rowInput} keyboardType="decimal-pad" onChangeText={text => setAmount(Number(text))} ></TextInput>}
                { category === 'Name' && <TextInput placeholder='Enter Name' style={editBudgetStyles.rowInput} onChangeText={text => setName(text)}></TextInput>}
                { category === 'Symbol' && <TextInput placeholder='Enter Symbol' style={editBudgetStyles.rowInput} onChangeText={text => setSymbol(text)}></TextInput>}

            </View>
        )
    }

    const setNewCost = () => {
        let newCost = 0
        existingRows.forEach(row => {
            const { amount } = row
            newCost += amount
        })
        setCostData(newCost)
    }

    const editCatagoryData = () => {
        const categoryData = existingRows.map(row => {
              const {symbol, amount} = row

        })
    }
    return (
        <>
            <AppBar navigation={navigation} />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                <>
                    {renderModal()}
                    <View style={editBudgetStyles.container}>
                        <View style={editBudgetStyles.columnContainer} >
                            {renderColumns()}
                        </View>

                        <View style={editBudgetStyles.itemList} >
                            {renderBudgetData()}
                            {renderExistingRows()}
                            <View style={editBudgetStyles.buttonContainer}>
                                {renderAddRowButton()}
                            </View>
                        </View>
                    </View>
                </>
            </TouchableWithoutFeedback>
        </>
    )
}

export default EditBudget