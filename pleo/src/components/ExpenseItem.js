import React, { Component } from 'react';

class ExpenseItem extends Component {
    render() {
        const expense = this.props.expense
        const date = (new Date(expense.date)).toLocaleDateString()
        return (
            <div>
                <h1>This is an expense item</h1>
                <label>Merchant </label>
                <label>{expense.merchant}</label>
                <br />
                <label>Amount </label>
                <label>{expense.amount.value} </label>
                <label>{expense.amount.currency}</label>
                <br />
                <label>Date </label>
                <label>{date}</label>
                <br />
                <br />
            </div>
        )
    }
}

export default ExpenseItem;