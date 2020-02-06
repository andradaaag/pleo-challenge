import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';

class Expenses extends Component {
    render() {
        return (
            this.props.expenses.map((expense) => (
                <ExpenseItem expense={expense} />
            ))
        )
    }
}

export default Expenses;