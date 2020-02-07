const updateExpensesReducer = (state = {}, action) => {
    // const { type, payload } = action;
    const type = action.type;

    switch (type) {
        case 'ADD_COMMENT':
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default updateExpensesReducer;