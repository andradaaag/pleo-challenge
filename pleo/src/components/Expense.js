import React, { Component } from 'react';
import Upload from './Upload';

class Expense extends Component {
    render() {
        var date = (new Date(this.props.expense.date)).toLocaleDateString()
        return (
            <div className="Expense">
                <h1>This is an expense</h1>
                <label>Amount </label>
                <label>{this.props.expense.amount.value} </label>
                <label>{this.props.expense.amount.currency}</label>
                <br />
                <label>Date </label>
                <label>{date}</label>
                <br />
                <label>Merchant </label>
                <label>{this.props.expense.merchant}</label>
                <br />
                <label>Category </label>
                <label>{this.props.expense.category}</label>
                <br />
                <label>
                    Comment
                <input type="text" name="comment" />
                </label>
                <br />
                <label>Receipts </label>
                <Upload receipts={this.props.expense.receipts[0]} />
            </div>
        );
    }
}

export default Expense;