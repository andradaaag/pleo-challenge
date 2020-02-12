import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';
import * as expensesActions from '../actions';
import Filter from './Filter'

class Expenses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: ''
        }
        this.handleFilter = this.handleFilter.bind(this)
    }
    componentDidMount() {
        this.props.getExpenses()
    }

    handleFilter(event) {
        const filter = event.target.value
        this.setState({
            filter: filter
        })
    }

    render() {
        if (!this.props.loaded) {
            return <div />
        }
        return (
            <div>
                <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
                <div>
                    {this.props.expenses
                        .filter((expense) => {
                            const merchant = expense.merchant.toLowerCase()
                            const filter = this.state.filter.toLowerCase()
                            return merchant.includes(filter)
                        })
                        .map((expense) => {
                            return (<ExpenseItem expense={expense} key={expense.id} />)
                        })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expensesReducer.expenses,
        loaded: state.expensesReducer.loaded
    }
}

export default connect(mapStateToProps, expensesActions)(Expenses);