import Immutable, { fromJS } from 'immutable'
import get from 'lodash/get'
// ------------------------------------
// Constants
// ------------------------------------
export const GET_TEAMS = 'GET_TEAMS'

export const CREATE_TEAM_REQUEST = 'CREATE_TEAM_REQUEST'
export const CREATE_TEAM_SUCCESS = 'CREATE_TEAM_SUCCESS'
export const CREATE_TEAM_ERROR = 'CREATE_TEAM_ERROR'

export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST'
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS'
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR'

export const GET_TEAM_PROJECT = 'GET_TEAM_PROJECT'

// ------------------------------------
// Actions
// ------------------------------------

export function getProjects (projects, teamId) {
  return {
    type    : GET_TEAM_PROJECT,
    payload : {
      projects : projects,
      teamId : teamId
    }
  }
}

export function getTeams (teams) {
  return {
    type : GET_TEAMS,
    payload: {
      teams: teams
    }
  }
}

export function createTeamRequest (params) {
  return {
    type: CREATE_TEAM_REQUEST,
    payload: {
      isFetching: true
    }
  }
}

export function createTeamSuccess (data) {
  return {
    type: CREATE_TEAM_SUCCESS,
    payload: {
      createTeamStatus: true,
      isFetching: false,
      teams: [data]
    }
  }
}

export function createTeamError (message) {
  return {
    type: CREATE_TEAM_ERROR,
    payload: {
      createTeamStatus: false,
      isFetching: false,
      message: message
    }
  }
}

export function createProjectRequest (params) {
  return {
    type: CREATE_PROJECT_REQUEST,
    payload: {
      isFetching: true
    }
  }
}

export function createProjectSuccess (data) {
  return {
    type: CREATE_PROJECT_SUCCESS,
    payload: {
      createProjectStatus: true,
      isFetching: false,
      project: data
    }
  }
}

export function createProjectError (message) {
  return {
    type: CREATE_PROJECT_ERROR,
    payload: {
      createProjectStatus: false,
      isFetching: false,
      message: message
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.Map({
  fetchTeamProjectStatus: null,
  projects : Immutable.List(),
  teams: Immutable.List(),
  message: ''
})

function fetchTeamProjectReducer (state = initialState, action) {
  switch (action.type) {
    case GET_TEAM_PROJECT:
      return state.merge(action.payload)
    case GET_TEAMS:
      return state.merge(action.payload)
    case CREATE_TEAM_REQUEST: {
      return state.merge(action.payload)
    }
    case CREATE_TEAM_SUCCESS: {
      return state.mergeDeep(action.payload)
    }
    case CREATE_TEAM_ERROR: {
      return state.merge(action.payload)
    }
    case CREATE_PROJECT_REQUEST: {
      return state.merge(action.payload)
    }
    case CREATE_PROJECT_SUCCESS: {
      if (get(action.payload.project, 'team-id')) {
        return state.update('teams', teams => teams.map(team => {
          if (team.get('team-id') === get(action.payload.project, 'team-id')) {
            return team.update('projects', arr => arr.push(fromJS(action.payload.project)))
          }
          return team
        }))
      } else return state.update('projects', arr => arr.push(fromJS(action.payload.project)))
    }
    case CREATE_PROJECT_ERROR: {
      return state.merge(action.payload)
    }
    default:
      return state
  }
}

export default fetchTeamProjectReducer
