import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import logo from '../logo.svg'

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
            <div className="container">
                <img src={logo} id="logo" alt="Cool Logo" ahref="https://www.pleo.io/"/>
                <br/>
                {this.renderRedirect()}
                <input type="text" id="userEmail" value={this.state.userEmail} spellCheck="false"
                    onChange={this.handleEmail.bind(this)} placeholder="You email here"
                />
                <br/>
                <button id="welcomePageButton" onClick={this.setRedirect}>Get me my expenses</button>
            </div>
        )
    }
}

export default Welcome