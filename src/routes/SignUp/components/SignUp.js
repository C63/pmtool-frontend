import React from 'react'
import { findDOMNode } from 'react-dom'
import { FormControl, FormGroup, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import classNames from 'classnames'
export default class SignUp extends React.Component {
  constructor () {
    super()
    this.signup = this.signup.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    if (nextProps.isAuthenticated !== this.props.isAuthenticated) {
      return false
    }
    return true
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isAuthenticated) {
      browserHistory.push('/project')
    }
  }

  signup (e) {
    const { doSignUp } = this.props
    e.preventDefault()
    doSignUp({
      'name' : findDOMNode(this.refs.name).value,
      'email' : findDOMNode(this.refs.email).value,
      'password': findDOMNode(this.refs.password).value
    })
  }

  render () {
    const { signUpStatus, errorSignUpMessage } = this.props
    const statusClassName = classNames(
      'signup__status',
      {
        'signup__status__fail' : signUpStatus !== null && signUpStatus === false,
        'signup__status__success': signUpStatus === true
      })
    return (
      <div className='signup'>
        <div className='signup__modal'>
          <h4>Welcome, my friend</h4>
          <form onSubmit={this.signup} className='signup__form'>
            <p className={statusClassName}>{errorSignUpMessage}</p>
            <FormGroup>
              <FormControl
                id='formControlsName'
                label='Fullname'
                type='text'
                placeholder='Enter your full name'
                ref='name'
              />
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
                className='signup__submit-btn'
                >
                  Register
              </Button>
            </FormGroup>
          </form>
        </div>
      </div>
    )
  }
}

SignUp.propTypes = {
  doSignUp : React.PropTypes.func.isRequired,
  signUpStatus: React.PropTypes.bool,
  dispatch: React.PropTypes.func,
  errorSignUpMessage: React.PropTypes.string,
  isAuthenticated: React.PropTypes.bool
}
