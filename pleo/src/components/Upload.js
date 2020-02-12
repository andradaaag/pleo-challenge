import React, { Component } from 'react';
import noImage from '../no_image.png';

class Upload extends Component {
    constructor(props) {
        super(props)

        var preview = noImage
        if (this.props.receipt) {
            const url = "http://localhost:3000" + this.props.receipt.url
            console.log("Upload with receipt", url)
            preview = url
        }
        this.state = {
            preview: preview
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            this.setState({
                preview: reader.result
            })
            this.props.handleReceipt(file)
        }
    }

    render() {
        console.log("Upload state", this.state)
        return (
            <div>
                <input type="file" onChange={this.handleChange} />
                <br />
                <img src={this.state.preview} alt="Receipt" width="300" height="300" />
            </div>
        );
    }
}
export default Upload