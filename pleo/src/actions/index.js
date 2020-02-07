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

export function saveExpenses(data) {
    return (dispatch) => {
        const body = {
            comment: data.comment
        }
        return axios.post('http://localhost:3000/expenses/' + data.id, body)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}

export const updateExpenseWithComment = (data) => {
    console.log(data)
    return {
        type: 'ADD_COMMENT',
        payload: {
            updateExpense: data
        }
    }
}