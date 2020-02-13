import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ExpenseItem extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        const path = '/expense/' + this.props.expense.id
        if (this.state.redirect) {
            return <Redirect push to={path} />
        }
    }

    render() {
        const expense = this.props.expense
        const date = new Date(expense.date)
        const dateString = date.toDateString() + ", " + date.toTimeString().slice(0, 5)
        return (
            <div className="expenseItem" onClick={this.setRedirect}>
                {this.renderRedirect()}
                <label className="merchant">{expense.merchant}</label>
                <label className="value">{expense.amount.value} </label>
                <label className="currency">{expense.amount.currency}</label>
                <label className="date">{dateString}</label>
            </div>
        )
    }
}

export default ExpenseItem;