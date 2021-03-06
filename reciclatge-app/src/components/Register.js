import React, { Component } from 'react'

import './styles/Register.css'
class Register extends Component {
    state = {
        email: null,
        password: null,
        password2: null,
        error: null
    }
    keepEmail = event => this.setState({ email: event.target.value })
    keepPassword = event => this.setState({ password: event.target.value })
    keepPassword2 = event => this.setState({ password2: event.target.value })

    registerUser = () => {
        const { state: { email, password, password2 } } = this
        if (password === password2) {
            this.props.onRegister(email, password)
                .catch(err => this.setState({ error: 'invalid email' }))
        } else this.setState({ error: 'password do not match' })

    }

    render() {
        const {
            state: { error },
            props: { onLogin },
            keepPassword,
            keepPassword2,
            keepEmail,
            registerUser
        } = this

        return (
            <div className="register">
                <h1 className="register__title"> Register account </h1>
                <div className="register__group">
                    <h3 className="register__text"> Email </h3>
                    <input className="register__input" onChange={keepEmail}></input>
                </div>
                <div className="register__group">
                    <h3 className="register__text"> Password </h3>
                    <input type="password" className="register__input" onChange={keepPassword}></input>
                </div>
                <div className="register__group">
                    <h3 className="register__text"> Confirm Password </h3>
                    <input type="password" className="register__input" onChange={keepPassword2}></input>
                </div>
                <div>
                    {error && <p className="register__error">{error}</p>}
                </div>
                <button className="register__btn" onClick={registerUser}> Register </button>
                <button className="register__btn register__btn--secondary" onClick={onLogin}> Log in </button>
            </div>
        )
    }
}

export default Register