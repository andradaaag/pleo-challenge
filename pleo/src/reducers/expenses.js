const expensesReducer = (state = {
    expenses: [],
    loaded: false
}, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'LOAD_EXPENSES':
            return {
                expenses: payload.expenses.expenses,
                loaded: true
            };
        case 'ADD_COMMENT':
            var expenses = state.expenses;
            var index = expenses.findIndex(expense => expense.id === payload.updateExpense.id);
            expenses[index].comment = payload.updateExpense.comment;
            return {
                ...state,
                expenses: expenses
            };
        default:
            return state;
    }
};

export default expensesReducer;