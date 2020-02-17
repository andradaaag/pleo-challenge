import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import * as expensesActions from '../actions';
import Filter from './Filter'
import FilterByDropDown from './FilterByDropDown'
import EndMessage from './EndMessage'

const options = ["Merchant", "Date", "Amount", "Currency"]

class Expenses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userEmail: this.props.match.params.userEmail,
            filter: '',
            selectedOption: options[0],
            expensesPerPage: 13
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.fetchMoreData = this.fetchMoreData.bind(this)

        this.props.getExpenses(this.state.userEmail, (e) => this.filter(e), 0, this.state.expensesPerPage, [])
    }

    fetchMoreData() {
        this.props.getExpenses(this.state.userEmail, (e) => this.filter(e), this.props.currentPage, this.state.expensesPerPage, this.props.expenses)
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
        if (filter.length === 0) {
            return true
        }
        var value = ''
        switch (this.state.selectedOption) {
            case "Merchant":
                value = expense.merchant.toLowerCase()
                break
            case "Date":
                const date = new Date(expense.date)
                const dateString = date.toDateString() + ", " + date.toTimeString().slice(0, 5)
                value = dateString.toLowerCase()
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
        if (!this.props.expenses || this.props.expenses.length === 0) {
            return (<div />)
        }
        const hasMore = this.props.currentPage * this.state.expensesPerPage < this.props.totalExpenses
        const filtered = this.props.expenses.filter((expense) => this.filter(expense))
        if(filtered.length < this.state.expensesPerPage && hasMore) {
            this.fetchMoreData()
        }
        return (
            <div id="expenses" className="container">
                <Filter
                    filter={this.state.filter}
                    handleFilter={this.handleFilter}
                />
                <FilterByDropDown
                    options={options}
                    selectedOption={this.state.selectedOption}
                    handleSelect={this.handleSelect}
                />
                <div id="expensesContainer">
                    <InfiniteScroll
                        dataLength={this.props.expenses.length}
                        next={this.fetchMoreData}
                        hasMore={hasMore}
                        loader="Load more expenses to see more results ..."
                        scrollableTarget="expenses"
                        endMessage={<EndMessage />}
                    >
                        {filtered.map((expense, index) => {
                            return (<ExpenseItem expense={expense} key={index} />)
                        })}
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expensesReducer.expenses,
        totalExpenses: state.expensesReducer.totalExpenses,
        currentPage: state.expensesReducer.currentPage
    }
}

export default connect(mapStateToProps, expensesActions)(Expenses);