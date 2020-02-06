import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import expensesReducer from './reducers/expenses';
import { Provider } from 'react-redux';

const initialState = {
    expenses: [
        {
            id: '5b995dff2e3cb74644948a66',
            amount: {
                value: '2149.29',
                currency: 'GBP'
            },
            date: '2017-06-21T08:45:09.326Z',
            merchant: 'QUONK',
            receipts: [],
            comment: '',
            category: '',
            user: {
                first: 'Atkins',
                last: 'Blackburn',
                email: 'atkins.blackburn@pleo.io'
            }
        },
        {
            id: '5b995dffdeec40464bd614bf',
            amount: {
                value: '731.92',
                currency: 'EUR'
            },
            date: '2017-05-30T14:12:31.054Z',
            merchant: 'WRAPTURE',
            receipts: [],
            comment: '',
            category: '',
            user: {
                first: 'Barbara',
                last: 'Downs',
                email: 'barbara.downs@pleo.io'
            }
        }
    ]
}

const store = createStore(
    expensesReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));