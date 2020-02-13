const expensesReducer = (state = {
    expenses: [],
    loaded: false
}, action) => {
    const { type, payload } = action
    var expenses = state.expenses
    var index = 0

    switch (type) {
        case 'LOAD_EXPENSES':
            const filtered = payload.expenses.expenses
            return {
                expenses: filtered,
                loaded: true
            };
        case 'LOAD_EXPENSE':
            console.log("Reducer LOAD_EXPENSE", payload.expense)
            index = expenses.findIndex(expense => expense.id === payload.expense.id)
            expenses[index] = payload.expense
            return {
                ...state,
                expenses: expenses
            };
        case 'ADD_COMMENT':
            index = expenses.findIndex(expense => expense.id === payload.updateExpense.id)
            expenses[index].comment = payload.updateExpense.comment
            return {
                ...state,
                expenses: expenses
            };
        default:
            return state;
    }
};

export default expensesReducer;