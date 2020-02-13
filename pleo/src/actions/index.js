import axios from 'axios'

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

export function saveExpensesWithComment(data) {
    return (dispatch) => {
        const body = {
            comment: data.comment
        }
        return axios.post('http://localhost:3000/expenses/' + data.id, body)
        .then(res => {
            console.log("POST Comment Res", res)
        }).catch(err => {
            console.log("POST Comment Res", err)
        })
    }
}

export const updateExpenseWithComment = (data) => {
    return {
        type: 'ADD_COMMENT',
        payload: {
            updateExpense: data
        }
    }
}

export function saveExpensesWithReceipt(data) {
    return (dispatch) => {
        const fd = new FormData()
        fd.append('receipt', data.receipt)
        return axios.post('http://localhost:3000/expenses/' + data.id + '/receipts', fd, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log("POST Receipt Res", res)
            dispatch(loadExpense(res.data));
        }).catch(err => {
            console.log("POST Receipt Res", err)
        })
    }
}

export const loadExpense = data => ({
    type: 'LOAD_EXPENSE',
    payload: {
        expense: data
    }
})