import firebase from 'firebase'

export const getBudgetData = () => {
    return {
        type: 'BUDGET_DATA'
    }
}

export const setBudgetData = (amount: number) => {
    return {
        type: 'SET_BUDGET_DATA',
        payload: amount
    }
}
