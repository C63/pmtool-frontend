import React from 'react'
import { FieldGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import makeLogin from '../../../store/api'

export const Login = (props) => (
  <div className='login'>
    <h4>Welcome, my friend</h4>
    <form className='login__form'>
      <FieldGroup
        id='formControlsEmail'
        type='email'
        label='Email address'
        placeholder='Enter email'
        ref='email'
      />
      <FieldGroup
        id='formControlsPassword'
        label='Password'
        type='password'
        ref='password'
      />
      <Button
        type='submit'
        className='login__submit-btn'
        onClick={props.login(makeLogin('wa', 'vkl'))}>
          Login
      </Button>
      <div className='login__signup-forgot'>
        <Link to={`/signup`}>Signup</Link>/
        <Link to={`/forgot`}>Forgot your password</Link>
      </div>
    </form>
  </div>
)

Login.propTypes = {
  login : React.PropTypes.func.isRequired
}

export default Login
