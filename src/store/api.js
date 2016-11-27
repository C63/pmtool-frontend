import get from 'lodash/get'
import { loginRequest, loginError, loginSuccess } from '../routes/Login/modules/login'
import { signUpSuccess, signUpError, signUpRequest } from '../routes/SignUp/modules/signup'
import { ACCOUNT_URL } from './constant.js'

export function doLogin (data) {
  return (dispatch) => {
    dispatch(loginRequest(data))
    fetch(ACCOUNT_URL + 'get-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status === 200) {
        response.json().then(data => {
          localStorage.setItem('userToken', get(data, 'access-token'))
          dispatch(loginSuccess(data))
        })
        return
      }
      return Promise.reject(response.statusText)
    })
    .catch(error => {
      localStorage.clear()
      dispatch(loginError(error))
    })
  }
}

export function doSignUp (data) {
  return (dispatch) => {
    dispatch(signUpRequest(data))
    fetch(ACCOUNT_URL + 'register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status === 200) {
        response.json().then(data => {
          localStorage.setItem('userToken', get(data, 'access-token'))
          dispatch(signUpSuccess(data))
        })
      }
      return Promise.reject(response)
    })
    .catch(error => {
      localStorage.clear()
      error.json().then(errmes => dispatch(signUpError(errmes.exception)))
    })
  }
}
