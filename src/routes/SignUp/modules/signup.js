import get from 'lodash/get'
// ------------------------------------
// Constants
// ------------------------------------
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'

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
