import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as expensesActions from '../actions';
import Upload from './Upload'
import ExpenseDetail from './ExpenseDetail'

class Expense extends Component {
    constructor(props) {
        super(props);

        this.handleComment = this.handleComment.bind(this);
        this.handleReceipt = this.handleReceipt.bind(this);
        this.save = this.save.bind(this);

        const params = this.props.match.params
        const expense = this.props.expenses.find(expense => expense.id === params.id)
        this.state = {
            expense: expense
        }
    }

    save() {
        const commentData = {
            id: this.state.expense.id,
            comment: this.state.expense.comment
        }
        this.props.saveExpensesWithComment(commentData)
        const receiptData = {
            id: this.state.expense.id,
            receipt: this.state.file
        }
        this.props.saveExpensesWithReceipt(receiptData)
    }

    handleComment(event) {
        const comment = event.target.value
        var expense = this.state.expense

        // Update local state
        this.setState({
            expense: expense
        })

        // Update global state
        this.props.updateExpenseWithComment({
            id: expense.id,
            comment: comment
        });
    }

    handleReceipt = function (file) {
        var expense = this.state.expense
        console.log("Handle receipt", file)

        // Update only local state
        this.setState({
            expense: expense,
            file: file
        })
    }

    render() {
        const expense = this.state.expense
        const date = new Date(expense.date)
        const dateString = date.toDateString() + ", " + date.toTimeString().slice(0, 5)
        const amount = expense.amount.value + " " + expense.amount.currency
        console.log("Expense render", this.state)
        return (
            <div className="container">
                <Upload receipt={expense.receipts[0]} handleReceipt={this.handleReceipt} />
                <div className="expenseDetails">
                    <ExpenseDetail label="Amount" value={amount} />
                    <ExpenseDetail label="Date" value={dateString} />
                    <ExpenseDetail label="Merchant" value={expense.merchant} />
                    <ExpenseDetail label="Category" value={expense.category} />
                </div>
                <textarea id="comment" className="expenseDetail"
                    placeholder="Add your comment here"
                    value={expense.comment}
                    onChange={this.handleComment}
                />
                <button id="saveButton" className="expenseDetail" onClick={this.save}>Save</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expensesReducer.expenses,
        loaded: state.expensesReducer.loaded
    }
}

export default connect(mapStateToProps, expensesActions)(Expense);