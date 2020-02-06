import React, { Component } from 'react';
import Upload from './Upload';
import { connect } from 'react-redux';

class Expense extends Component {
    render() {
        const params = this.props.match.params
        const expense = this.props.expenses.find(expense => expense.id === params.id)
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

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Expense);