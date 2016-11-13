import get from 'lodash/get'
// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const ACCOUNT_URL = 'http://localhost:8080/api/v1/accounts/'
// ------------------------------------
// Actions
// ------------------------------------

export function loginRequest (data) {
  return {
    type    : LOGIN_REQUEST,
    payload : {
      data : data,
      isFetching: true,
      isAuthenticated: false
    }
  }
}

export function loginSuccess (data) {
  console.log(get(data, 'access-token'))
  return {
    type    : LOGIN_SUCCESS,
    payload : {
      isFetching: false,
      isAuthenticated: true,
      userToken: get(data, 'access-token')
    }
  }
}

export function loginError (data) {
  return {
    type    : LOGIN_ERROR,
    payload : {
      message : data,
      isFetching: false,
      isAuthenticated: false
    }
  }
}

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
      }
      return Promise.reject(response.statusText)
    })
    .catch(error => { dispatch(loginError(error)) })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loginStatus: null,
  isAuthenticated : !!localStorage.getItem('userToken'),
  errorLoginMessage: '',
  userToken: null
}
export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
        isAuthenticated: action.payload.isAuthenticated
      })
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        loginStatus : false,
        isFetching: action.payload.isFetching,
        isAuthenticated: action.payload.isAuthenticated,
        errorLoginMessage: action.payload.message
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loginStatus : true,
        isFetching: action.payload.isFetching,
        isAuthenticated: action.payload.isAuthenticated,
        userToken: action.payload.userToken,
        errorLoginMessage: ''
      })
    default:
      return state
  }
}
