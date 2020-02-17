import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import logo from '../logo.svg'
import * as actions from '../actions/clear'
import { connect } from 'react-redux'

class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            userEmail: ''
        }
        this.props.clearStore()
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

    enterPressed(event) {
        var code = event.keyCode || event.which;
        if (code === 13) {
            this.setRedirect()
        }
    }

    render() {
        return (
            <div className="welcomeContainer">
                <img src={logo} id="logo" alt="Cool Logo" ahref="https://www.pleo.io/" />
                <br />
                {this.renderRedirect()}
                <input type="text" id="userEmail"
                    value={this.state.userEmail}
                    spellCheck="false"
                    onChange={this.handleEmail.bind(this)}
                    onKeyPress={this.enterPressed.bind(this)}
                    placeholder="You email here"
                />
                <br />
                <button id="welcomePageButton" onClick={this.setRedirect}>Get me my expenses</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, actions)(Welcome)