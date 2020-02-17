import { combineReducers } from 'redux'
import expensesReducer from './expenses'

const reducers = combineReducers({
    expensesReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'CLEAR_STORE') {
      state = undefined
    }
    return reducers(state, action)
}

export default rootReducer;