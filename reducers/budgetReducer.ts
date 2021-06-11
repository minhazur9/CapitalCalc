
const budgetReducer = (state = [{ x: "REM", y: 500, total: 500 }], action: any) => {
    switch (action.type) {
        case 'SET_BUDGET_DATA':
            return action.payload
        default:
            return state
    }
}

export default budgetReducer