import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';
import * as expensesActions from '../actions';
import Filter from './Filter'
import FilterByDropDown from './FilterByDropDown'

const options = ["Merchant", "Date", "Amount", "Currency"]

class Expenses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: '',
            selectedOption: options[0]
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
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

    handleSelect(option) {
        this.setState({
            selectedOption: option
        })
    }

    filter = (expense) => {
        const filter = this.state.filter.toLowerCase()
        var value = ''
        switch (this.state.selectedOption) {
            case "Merchant":
                value = expense.merchant.toLowerCase()
                break
            case "Date":
                value = (new Date(expense.date)).toLocaleDateString()
                break
            case "Amount":
                value = expense.amount.value.toLowerCase()
                break
            case "Currency":
                value = expense.amount.currency.toLowerCase()
                break
            default:
                break
        }
        return value.includes(filter)
    }

    render() {
        if (!this.props.loaded) {
            return <div />
        }
        return (
            <div>
                <Filter
                    filter={this.state.filter}
                    handleFilter={this.handleFilter}
                />
                <FilterByDropDown
                    options={options}
                    selectedOption={this.state.selectedOption}
                    handleSelect={this.handleSelect}
                />
                <div>
                    {this.props.expenses
                        .filter((expense) => this.filter(expense))
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