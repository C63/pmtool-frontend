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
export function doLogin () {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/test')
      .then(response => { dispatch(login(response)) })
      .then(data => { dispatch(login(data)) })
      .catch(error => { dispatch(login(error)) })
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
