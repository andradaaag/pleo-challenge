import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class Filter extends Component {
    constructor(props) {
        super(props)

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(option) {
        this.props.handleSelect(option.value)
    }

    render() {
        return (
            <div>
                <Dropdown options={this.props.options}
                    onChange={this.handleSelect}
                    value={this.props.selectedOption}
                    placeholder={this.props.selectedOption}
                    className="filterDropDown"
                    menuClassName="filterDropDownMenu" />
            </div>
        );
    }
}
export default Filter