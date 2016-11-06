import React from 'react'
import { FormControl, FormGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router'

export default class Login extends React.Component
{
  constructor () {
    super()
    this.login = this.login.bind(this)
  }

  login (e) {
    e.preventDefault()
    this.props.doLogin('wa', 'vkl')
  }

  render () {
    return (
      <div className='login'>
        <div className='login__modal'>
          <h4>Welcome, my friend</h4>
          <form onSubmit={this.login} className='login__form'>
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
  doLogin : React.PropTypes.func.isRequired
}
