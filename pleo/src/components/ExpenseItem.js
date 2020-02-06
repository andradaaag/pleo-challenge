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
        const date = (new Date(expense.date)).toLocaleDateString()
        return (
            <div onClick={this.setRedirect}>
                {this.renderRedirect()}
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