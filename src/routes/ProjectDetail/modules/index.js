import Immutable, { fromJS } from 'immutable'
import get from 'lodash/get'
// ------------------------------------
// Constants
// ------------------------------------

export const GET_TASK_LIST_ID = 'GET_TASK_LIST_ID'
export const GET_COMMENT = 'GET_COMMENT'

export const ADD_LIST_ID_REQUEST = 'ADD_LIST_ID_REQUEST'
export const ADD_LIST_ID_ERROR = 'ADD_LIST_ID_ERROR'
export const ADD_LIST_ID_SUCCESS = 'ADD_LIST_ID_SUCCESS'

export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST'
export const ADD_TASK_ERROR = 'ADD_TASK_ERROR'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'
export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'

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
      taskId: data
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

export function getTaskListId (data) {
  return {
    type    : GET_TASK_LIST_ID,
    payload : {
      taskIds: data
    }
  }
}

export function addListIdRequest () {
  return {
    type    : ADD_LIST_ID_REQUEST,
    payload : {
      isFetching: true
    }
  }
}

export function addListIdSuccess (data) {
  return {
    type    : ADD_LIST_ID_SUCCESS,
    payload : {
      isFetching: false,
      taskIds : data
    }
  }
}

export function addListIdError () {
  return {
    type    : ADD_LIST_ID_ERROR,
    payload : {
      isFetching: false
    }
  }
}

export function addCommentRequest () {
  return {
    type    : ADD_COMMENT_REQUEST,
    payload : {
      isFetching: true
    }
  }
}

export function addCommentError () {
  return {
    type    : ADD_COMMENT_ERROR,
    payload : {
      isFetching: false
    }
  }
}

export function addCommentSuccess (data) {
  return {
    type    : ADD_COMMENT_SUCCESS,
    payload : {
      comment : data,
      isFetching: false
    }
  }
}

export function getComments (comments) {
  return {
    type    : ADD_COMMENT_SUCCESS,
    payload : {
      comments : comments
    }
  }
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.Map(
  {
    addTaskStatus: null,
    taskIds: Immutable.List()
  }
)
export default function addTaskReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_REQUEST:
      return state.merge(action.payload)
    case ADD_TASK_ERROR:
      return state.merge(action.payload)
    case ADD_TASK_SUCCESS:
      return state.update('taskIds', taskIds => taskIds.map(taskId => {
        if (taskId.get('task-list-id') === get(action.payload.taskId, 'task-list-id')) {
          if (taskId.get('tasks')) {
            return taskId.update('tasks', arr => arr.push(fromJS(action.payload.taskId)))
          } else {
            return taskId.set('tasks', fromJS([action.payload.taskId]))
          }
        }
        return taskId
      }))
    case GET_TASK_LIST_ID:
      return state.merge(action.payload)
    case ADD_LIST_ID_REQUEST:
      return state.merge(action.payload)
    case ADD_LIST_ID_SUCCESS:
      return state.update('taskIds', arr => arr.push(fromJS(action.payload.taskIds)))
    case ADD_LIST_ID_ERROR:
      return state.merge(action.payload)
    case ADD_COMMENT_REQUEST:
      return state.merge(action.payload)
    case ADD_COMMENT_SUCCESS:
      return state.update('comments', arr => arr.push(fromJS(action.payload.comment)))
    case ADD_COMMENT_ERROR:
      return state.merge(action.payload)
    case GET_COMMENT:
      return state.merge(action.payload)
    default:
      return state
  }
}
