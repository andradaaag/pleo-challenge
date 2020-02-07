import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';
import * as getExpensesActions from '../actions/getExpenses';

class Expenses extends Component {
    componentDidMount() {
        this.props.getExpenses()
    }

    render() {
        if (!this.props.loaded) {
            return <div />
        }
        return (
            this.props.expenses.map((expense) => (
                <ExpenseItem expense={expense} key={expense.id} />
            ))
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.getExpensesReducer.expenses,
        loaded: state.getExpensesReducer.loaded
    }
}

export default connect(mapStateToProps, getExpensesActions)(Expenses);