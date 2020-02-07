import React, { Component } from 'react';
import Upload from './Upload';
import { connect } from 'react-redux';
import * as expensesActions from '../actions';

class Expense extends Component {
    constructor(props) {
        super(props);

        this.handleComment = this.handleComment.bind(this);
        this.save = this.save.bind(this);

        const params = this.props.match.params
        const expense = this.props.expenses.find(expense => expense.id === params.id)
        this.state = {
            expense: expense
        }
    }

    save() {
        const data = {
            id: this.state.expense.id,
            comment: this.state.expense.comment
        }
        this.props.saveExpenses(data)
    }

    handleComment(event) {
        const comment = event.target.value
        var expense = this.state.expense
        expense.comment = comment

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

    render() {
        const expense = this.state.expense
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
                <input type="text" name="comment" value={expense.comment}
                        onChange={this.handleComment}
                    />
                </label>
                <br />
                <label>Receipts </label>
                <Upload receipts={expense.receipts[0]} />
                <button onClick={this.save}>Save</button>
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