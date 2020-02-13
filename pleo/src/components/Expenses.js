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

        const userEmail = this.props.match.params.userEmail
        this.state = {
            userEmail: userEmail,
            filter: '',
            selectedOption: options[0],
            currentPage: 0,
            expensesPerPage: 13
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.fetchMoreData = this.fetchMoreData.bind(this)

        this.props.getExpenses(this.state.currentPage, this.state.expensesPerPage)
    }

    fetchMoreData() {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
        this.props.getExpenses(this.state.currentPage, this.state.expensesPerPage)
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
        return value.includes(filter) && (expense.user.email === this.state.userEmail || this.state.userEmail === "admin")
    }

    render() {
        const hasMore = this.state.currentPage * this.state.expensesPerPage <= this.props.totalExpenses
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
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="expenses"
                        endMessage={<EndMessage />}
                    >
                        {this.props.expenses
                            .filter((expense) => this.filter(expense))
                            .map((expense) => {
                                return (<ExpenseItem expense={expense} key={expense.id} />)
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
        totalExpenses: state.expensesReducer.totalExpenses
    }
}

export default connect(mapStateToProps, expensesActions)(Expenses);