import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import { Button, Text, Modal, Portal, Provider } from 'react-native-paper';
import { EditBudgetNavigationProp } from './params/HomeDrawerParams';
import { editBudgetStyles } from '../styles';
import AppBar from '../components/AppBar';
import { RootState } from '../store'
import { setBudgetData } from '../actions';


type Props = {
    navigation: EditBudgetNavigationProp;
};

const EditBudget = ({ navigation }: Props) => {
    const budgetData = useSelector((state: RootState) => state.budgetData)
    const dispatch = useDispatch()
    const [costData, setCostData] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);

    type categoryData = {
        symbol: string,
        name: string,
        amount: number
    }

    // useEffect(() => {
    //     setBudgetData(userBudget)
    // }, [])

    const renderBudgetData = () => {
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
                        onChangeText={number => number === '' ? dispatch(setBudgetData(0)) : dispatch(setBudgetData(Number(number)))}
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

    const renderModal = () => {
        return (
            <Portal>
                <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)} contentContainerStyle={editBudgetStyles.addRowModal}>
                    <View style={editBudgetStyles.modalRows}>
                        <Text>Symbol</Text>
                        <Text>Name</Text>
                        <Text>Amount</Text>
                    </View>
                </Modal>
            </Portal>
        )
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