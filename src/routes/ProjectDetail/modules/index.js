// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST'
export const ADD_TASK_ERROR = 'ADD_TASK_ERROR'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------

export function addTaskRequest (data) {
  return {
    type    : ADD_TASK_REQUEST,
    payload : {
      data : data,
      isFetching: true
    }
  }
}

export function addTaskSuccess (data) {
  return {
    type    : ADD_TASK_SUCCESS,
    payload : {
      isFetching: false
    }
  }
}

export function addTaskError (data) {
  return {
    type    : ADD_TASK_ERROR,
    payload : {
      message : data,
      isFetching: false
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  addTaskStatus: null
}
export default function addTaskReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching
      })
    case ADD_TASK_ERROR:
      return Object.assign({}, state, {
        addTaskStatus : false,
        isFetching: action.payload.isFetching
      })
    case ADD_TASK_SUCCESS:
      return Object.assign({}, state, {
        addTaskStatus : true,
        isFetching: action.payload.isFetching
      })
    default:
      return state
  }
}
