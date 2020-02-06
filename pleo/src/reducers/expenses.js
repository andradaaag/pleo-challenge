const expensesReducer = (state = {
    expenses: []
}, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_COMMENT':
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default expensesReducer;