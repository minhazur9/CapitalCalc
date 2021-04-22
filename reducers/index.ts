import budgetReducer from './budgetReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    budgetData: budgetReducer
});

export default allReducers