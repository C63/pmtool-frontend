import projects from './mock.json'
// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_TEAM_PROJECT_REQUEST = 'FETCH_TEAM_PROJECT_REQUEST'
export const FETCH_TEAM_PROJECT_ERROR = 'FETCH_TEAM_PROJECT_ERROR'
export const FETCH_TEAM_PROJECT_SUCCESS = 'FETCH_TEAM_PROJECT_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------

export function fetchTeamProjectRequest (data) {
  return {
    type    : FETCH_TEAM_PROJECT_REQUEST,
    payload : {
      data : data,
      isFetching: true
    }
  }
}

export function fetchTeamProjectSuccess (data) {
  return {
    type    : FETCH_TEAM_PROJECT_SUCCESS,
    payload : {
      isFetching: false
    }
  }
}

export function fetchTeamProjectError (data) {
  return {
    type    : FETCH_TEAM_PROJECT_ERROR,
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
  fetchTeamProjectStatus: null,
  projects : projects
}
export default function fetchTeamProjectReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_TEAM_PROJECT_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching
      })
    case FETCH_TEAM_PROJECT_ERROR:
      return Object.assign({}, state, {
        fetchTeamProjectStatus : false,
        isFetching: action.payload.isFetching
      })
    case FETCH_TEAM_PROJECT_SUCCESS:
      return Object.assign({}, state, {
        fetchTeamProjectStatus : true,
        isFetching: action.payload.isFetching
      })
    default:
      return state
  }
}
