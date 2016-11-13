import React from 'react'
import { findDOMNode } from 'react-dom'
import { FormControl, FormGroup, Button } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'
import classNames from 'classnames'
export default class Login extends React.Component
{
  constructor () {
    super()
    this.login = this.login.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.userToken) {
      browserHistory.push('/')
    }
  }
  login (e) {
    const { doLogin } = this.props
    e.preventDefault()
    doLogin({
      'email' : findDOMNode(this.refs.email).value,
      'password': findDOMNode(this.refs.password).value
    })
  }

  render () {
    const { loginStatus, errorLoginMessage } = this.props
    const statusClassName = classNames(
      'login__status',
      {
        'login__status__fail' : loginStatus !== null && loginStatus === false,
        'login__status__success': loginStatus === true
      })
    return (
      <div className='login'>
        <div className='login__modal'>
          <h4>Welcome, my friend</h4>
          <form onSubmit={this.login} className='login__form'>
            <p className={statusClassName}>{errorLoginMessage}</p>
            <FormGroup>
              <FormControl
                id='formControlsEmail'
                type='email'
                label='Email address'
                placeholder='Enter email'
                ref='email'
              />
              <FormControl
                id='formControlsPassword'
                label='Password'
                type='password'
                placeholder='Enter password'
                ref='password'
              />
              <Button
                type='submit'
                className='login__submit-btn'
                >
                  Login
              </Button>
              <div className='login__signup-forgot'>
                <Link to={`/signup`}>Sign-up</Link> / <Link to={`/forgot`}>Forgot your password</Link>
              </div>
            </FormGroup>
          </form>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  doLogin : React.PropTypes.func.isRequired,
  loginStatus: React.PropTypes.bool,
  dispatch: React.PropTypes.func,
  errorLoginMessage: React.PropTypes.string,
  userToken: React.PropTypes.string
}
