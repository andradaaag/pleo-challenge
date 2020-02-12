import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return (
            <div>
                <label>
                    Filter
                    <input type="text" name="filter"
                        value={this.props.filter}
                        onChange={this.props.handleFilter}
                    />
                </label>
            </div>
        );
    }
}
export default Filter