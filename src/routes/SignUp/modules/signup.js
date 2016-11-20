import get from 'lodash/get'
// ------------------------------------
// Constants
// ------------------------------------
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'

export const ACCOUNT_URL = 'http://localhost:8080/api/v1/accounts/'
// ------------------------------------
// Actions
// ------------------------------------

export function signUpRequest (data) {
  return {
    type    : SIGNUP_REQUEST,
    payload : {
      data : data,
      isFetching: true,
      isAuthenticated: false
    }
  }
}

export function signUpSuccess (data) {
  return {
    type    : SIGNUP_SUCCESS,
    payload : {
      isFetching: false,
      isAuthenticated: true,
      userToken: get(data, 'access-token')
    }
  }
}

export function signUpError (data) {
  return {
    type    : SIGNUP_ERROR,
    payload : {
      message : data,
      isFetching: false,
      isAuthenticated: false
    }
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
    }) }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  signUpStatus: null,
  isAuthenticated : !!localStorage.getItem('userToken'),
  errorSignUpMessage: '',
  userToken: null
}
export default function signUpReducer (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
        isAuthenticated: action.payload.isAuthenticated
      })
    case SIGNUP_ERROR:
      return Object.assign({}, state, {
        signUpStatus : false,
        isFetching: action.payload.isFetching,
        isAuthenticated: action.payload.isAuthenticated,
        errorSignUpMessage: action.payload.message
      })
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        signUpStatus : true,
        isFetching: action.payload.isFetching,
        isAuthenticated: action.payload.isAuthenticated,
        userToken: action.payload.userToken,
        errorSignUpMessage: ''
      })
    default:
      return state
  }
}
