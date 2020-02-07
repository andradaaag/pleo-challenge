import axios from 'axios';

export function getExpenses() {
    return (dispatch) => {
        return axios.get('http://localhost:3000/expenses').then((response) => {
            dispatch(loadExpenses(response.data));
        })
    }
}
export const loadExpenses = data => ({
    type: 'LOAD_EXPENSES',
    payload: {
        expenses: data
    }
})