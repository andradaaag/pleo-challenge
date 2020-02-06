import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';

class Expenses extends Component {
    render() {
        return (
            this.props.expenses.map((expense) => (
                <ExpenseItem expense={expense} key={expense.id} />
            ))
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Expenses);