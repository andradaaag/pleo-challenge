const expensesReducer = (state = {
    expenses: [],
    loaded: false
}, action) => {
    const { type, payload } = action
    var expenses = state.expenses
    const isUpdating = expenses.length > 0 && payload && payload.updateExpense
    var index = isUpdating ? expenses.findIndex(expense => expense.id === payload.updateExpense.id) : 0

    switch (type) {
        case 'LOAD_EXPENSES':
            const filtered = payload.expenses.expenses
            return {
                expenses: filtered,
                loaded: true
            };
        case 'ADD_COMMENT':
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