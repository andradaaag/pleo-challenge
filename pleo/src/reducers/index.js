import { combineReducers } from 'redux'
// import updateExpensesReducer from './updateExpenses'
import getExpensesReducer from './getExpenses'

const reducers = combineReducers({
    // updateExpensesReducer,
    getExpensesReducer
})

export default reducers;