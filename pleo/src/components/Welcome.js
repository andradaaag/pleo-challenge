import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Welcome extends Component {
    state = {
        redirect: false,
        userEmail: ''
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        const path = '/expenses/' + this.state.userEmail
        if (this.state.redirect) {
            return <Redirect push to={path} />
        }
    }

    handleEmail(event) {
        this.setState({
            userEmail: event.target.value
        })
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <input type="text" value={this.state.userEmail}
                    onChange={this.handleEmail.bind(this)} placeholder="You email here"
                />
                <button onClick={this.setRedirect}>Get me my expenses</button>
            </div>
        )
    }
}

export default Welcome