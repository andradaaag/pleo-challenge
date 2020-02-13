import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return (
            <div className="filterInputContainer">
                <input type="text" name="filter"
                    id="filterInput"
                    placeholder="Filter receipts here"
                    value={this.props.filter}
                    onChange={this.props.handleFilter}
                />
            </div>
        );
    }
}
export default Filter