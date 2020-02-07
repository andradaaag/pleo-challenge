const getExpensesReducer = (state = {
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
        default:
            return state;
    }
};

export default getExpensesReducer;