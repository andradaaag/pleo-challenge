import axios from 'axios'

const adminEmail = 'admin'

export function getExpenses(userEmail, currentPage, expensesPerPage, expensesSoFar) {
    return dispatch => {
        return getExpensesWrapper(userEmail, currentPage, expensesPerPage, expensesSoFar)
            .then(result => {
                dispatchExpenses(dispatch, result)
            })
    }
}

const getExpensesWrapper = async (userEmail, currentPage, expensesPerPage, expensesSoFar) => {
    var result = {
        expensesSoFar: expensesSoFar,
        currentPage: currentPage,
        numberOfAddedExpenses: 0,
        keepFetchingExpenses: true
    }

    result = await getExpensesByUser(userEmail, result.currentPage, expensesPerPage, result.expensesSoFar, result.numberOfAddedExpenses)
    result.currentPage += 1
    while (result.keepFetchingExpenses) {
        result = await getExpensesByUser(userEmail, result.currentPage, expensesPerPage, result.expensesSoFar, result.numberOfAddedExpenses)
        result.currentPage += 1
    }
    return result
}

function dispatchExpenses(dispatch, result) {
    const data = {
        expenses: result.expensesSoFar,
        total: result.total,
        currentPage: result.currentPage
    }
    console.log("Expenses successfully loaded", data)
    dispatch(loadInitialExpenses(data))
}

async function getExpensesByUser(userEmail, currentPage, expensesPerPage, expensesSoFar, numberOfAddedExpenses) {
    const offset = currentPage * expensesPerPage
    const url = formURL(expensesPerPage, offset)
    const response = await getExpensesFromAPI(url)

    return processResponse(userEmail, currentPage, expensesPerPage, expensesSoFar, numberOfAddedExpenses, response)
}

function processResponse(userEmail, currentPage, expensesPerPage, expensesSoFar, numberOfAddedExpenses, response) {
    const total = response.data.total
    const newExpenses = response.data.expenses

    const newFilteredExpenses = filterExpenses(newExpenses, userEmail)
    numberOfAddedExpenses += newFilteredExpenses.length
    expensesSoFar = expensesSoFar.concat(newFilteredExpenses)
    const keepFetchingExpenses = keepFetching(currentPage, expensesPerPage, numberOfAddedExpenses, total)

    const result = {
        expensesSoFar: expensesSoFar,
        currentPage: currentPage,
        total: total,
        numberOfAddedExpenses: numberOfAddedExpenses,
        keepFetchingExpenses: keepFetchingExpenses
    }
    return result
}

function keepFetching(currentPage, expensesPerPage, numberOfAddedExpenses, total) {
    const notEnoughPerPage = numberOfAddedExpenses < expensesPerPage
    const hasMore = (currentPage + 1) * expensesPerPage < total
    return notEnoughPerPage && hasMore
}

function filterExpenses(expenses, userEmail) {
    return expenses.filter(expense => expense.user.email === userEmail || userEmail === adminEmail)
}

function formURL(expensesPerPage, offset) {
    return 'http://localhost:3000/expenses?limit=' + expensesPerPage + '&offset=' + offset
}

async function getExpensesFromAPI(url) {
    let response = await axios.get(url)
    if (response.status === 200) {
        return response
    } else {
        console.log("Error", response)
    }
}

export const loadInitialExpenses = (data) => ({
    type: 'LOAD_INITIAL_EXPENSES',
    payload: {
        expenses: data.expenses,
        total: data.total,
        currentPage: data.currentPage
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