import React, { Component } from 'react';
import Upload from './Upload';

class Expense extends Component {
    state = {
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
    render() {
        const params = this.props.match.params
        const expense = this.state.expenses.find(expense => expense.id === params.id)
        const date = (new Date(expense.date)).toLocaleDateString()
        return (
            <div className="Expense">
                <h1>This is an expense</h1>
                <label>Amount </label>
                <label>{expense.amount.value} </label>
                <label>{expense.amount.currency}</label>
                <br />
                <label>Date </label>
                <label>{date}</label>
                <br />
                <label>Merchant </label>
                <label>{expense.merchant}</label>
                <br />
                <label>Category </label>
                <label>{expense.category}</label>
                <br />
                <label>
                    Comment
                <input type="text" name="comment" placeholder={expense.comment} />
                </label>
                <br />
                <label>Receipts </label>
                <Upload receipts={expense.receipts[0]} />
            </div>
        );
    }
}

export default Expense;