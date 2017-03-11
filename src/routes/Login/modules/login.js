import get from 'lodash/get'
import { user as userSchemas } from '../../../store/schemas'
import normalize from '../../../utils/normalize'
// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const GET_PROFILE = 'GET_PROFILE'
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
export function logOut () {
  return {
    type: LOGOUT
  }
}

export function getProfile (user) {
  return {
    type: GET_PROFILE,
    payload: {
      user: normalize(user, userSchemas)
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loginStatus: null,
  isAuthenticated : !!localStorage.getItem('userToken'),
  errorLoginMessage: '',
  userToken: null,
  user: {}
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
        errorLoginMessage: action.payload.message,
        userToken: ''
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loginStatus : true,
        isFetching: action.payload.isFetching,
        isAuthenticated: action.payload.isAuthenticated,
        userToken: action.payload.userToken,
        errorLoginMessage: ''
      })
    case LOGOUT:
      return Object.assign({}, state, {
        initialState
      })
    case GET_PROFILE:
      return Object.assign({}, state, {
        user: action.payload.user
      })
    default:
      return state
  }
}
