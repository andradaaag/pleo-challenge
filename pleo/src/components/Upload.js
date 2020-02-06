import React, { Component } from 'react';
import noImage from '../no_image.png';

class Upload extends Component {
    constructor(props) {
        super(props);

        var receipt = noImage;
        if (this.props.receipt) {
            receipt = this.props.receipt;
        }
        this.state = {
            receipt: receipt
        };

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            receipt: URL.createObjectURL(event.target.files[0])
        })
    }
    render() {
        return (
            <div>
                <input type="file" onChange={this.handleChange} />
                <br />
                <img src={this.state.receipt} alt="Receipt" />
            </div>
        );
    }
}
export default Upload;