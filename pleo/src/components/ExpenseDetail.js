import React, { Component } from 'react';

class ExpenseDetail extends Component {
    render() {
        return (
            <div>
                <label className="expenseDetailLabel">{this.props.label} </label>
                <label className="expenseDetailValue">{this.props.value} </label>
            </div>
        );
    }
}

export default ExpenseDetail