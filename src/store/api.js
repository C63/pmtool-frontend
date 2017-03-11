import get from 'lodash/get'
import { loginRequest, loginError, loginSuccess, getProfile } from '../routes/Login/modules/login'
import { signUpSuccess, signUpError, signUpRequest } from '../routes/SignUp/modules/signup'
import { addTaskRequest, addTaskSuccess, addTaskError } from '../routes/ProjectDetail/modules'
import { DEV_URL } from './constant'
import { fetchPost, authGet } from '../utils/fetch'

export function doLogin (data) {
  return (dispatch) => {
    dispatch(loginRequest(data))
    fetch(DEV_URL + 'accounts/get-token', fetchPost(data))
    .then(response => {
      if (response.status === 200) {
        return response.json().then(data => {
          localStorage.setItem('userToken', get(data, 'access-token'))
          return dispatch(loginSuccess(data))
        })
      }
      return Promise.reject(response.statusText)
    })
    .catch(error => {
      localStorage.clear()
      return dispatch(loginError(error))
    })
  }
}

export function doSignUp (data) {
  return (dispatch) => {
    dispatch(signUpRequest(data))
    fetch(DEV_URL + 'accounts/register', fetchPost(data))
    .then(response => {
      if (response.status === 200) {
        return response.json().then(data => {
          localStorage.setItem('userToken', get(data, 'access-token'))
          return dispatch(signUpSuccess(data))
        })
      }
      return Promise.reject(response)
    })
    .catch(error => {
      localStorage.clear()
      return error.json().then(errmes => dispatch(signUpError(errmes.exception)))
    })
  }
}

export function addTask (params) {
  return (dispatch) => {
    dispatch(addTaskRequest(params))
    fetch(DEV_URL + 'tasks', fetchPost(params))
    .then(
      response => response.json().then(data => dispatch(addTaskSuccess(data))),
      error => error.json().then(err => dispatch(addTaskError(err)))
    )
  }
}

export function getUserProfile () {
  return (dispatch) => {
    fetch(DEV_URL + 'accounts/profile', authGet(localStorage.getItem('userToken')))
    .then(
      response => response.json().then(data => dispatch(getProfile(data)))
    )
  }
}
