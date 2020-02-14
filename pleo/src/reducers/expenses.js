const expensesReducer = (state = {
    expenses: [],
    totalExpenses: 0,
    currentPage: 0
}, action) => {
    const { type, payload } = action
    var expenses = state.expenses
    var index = 0

    switch (type) {
        case 'LOAD_INITIAL_EXPENSES':
            return {
                expenses: payload.expenses,
                totalExpenses: payload.total,
                currentPage: payload.currentPage
            };
        case 'LOAD_EXPENSES':
            const moreExpenses = expenses.concat(payload.expenses)
            return {
                ...state,
                expenses: moreExpenses,
                totalExpenses: payload.total,
                currentPage: payload.currentPage
            };
        case 'LOAD_EXPENSE':
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
            return state
    }
}

export default expensesReducer;