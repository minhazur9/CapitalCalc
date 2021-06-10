import { PieData } from '../types/PieDataInterface'

export const getBudgetData = () => {
    return {
        type: 'BUDGET_DATA'
    }
}

export const setBudgetData = (budgetData: PieData[]) => {
    return {
        type: 'SET_BUDGET_DATA',
        payload: budgetData
    }
}
