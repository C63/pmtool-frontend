
// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// ------------------------------------
// Actions
// ------------------------------------

export function loginRequest () {
  return {
    type    : LOGIN_REQUEST,
    payload : {
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
      isAuthenticated: true
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

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loginStatus: null,
  isAuthenticated : !!localStorage.getItem('userToken'),
  errorLoginMessage: '',
  isFetching: false
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
        isFetching: action.payload.isFetching,
        isAuthenticated: action.payload.isAuthenticated
      })
    default:
      return state
  }
}
