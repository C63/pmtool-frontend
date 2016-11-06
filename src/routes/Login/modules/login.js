// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOGIN'

// ------------------------------------
// Actions
// ------------------------------------
export function login (data) {
  return {
    type    : LOGIN,
    payload : {
      data
    }
  }
}

export const actions = {
  login
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loginStatus: ''
}
export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { loginStatus : action.payload.data })
    default:
      return state
  }
}
