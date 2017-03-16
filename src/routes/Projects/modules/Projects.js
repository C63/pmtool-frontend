import { normalize } from 'normalizr'
import Immutable from 'immutable'
import { teams as teamSchemas, projects as projectSchemas } from '../../../store/schemas'
// ------------------------------------
// Constants
// ------------------------------------
export const GET_TEAMS = 'GET_TEAMS'

export const CREATE_TEAM_REQUEST = 'CREATE_TEAM_REQUEST'
export const CREATE_TEAM_SUCCESS = 'CREATE_TEAM_SUCCESS'
export const CREATE_TEAM_ERROR = 'CREATE_TEAM_ERROR'

export const GET_TEAM_PROJECT = 'GET_TEAM_PROJECT'

// ------------------------------------
// Actions
// ------------------------------------

export function getProjects (projects, teamId) {
  return {
    type    : GET_TEAM_PROJECT,
    payload : {
      projects : normalize(projects, projectSchemas),
      teamId : teamId
    }
  }
}

export function getTeams (teams) {
  return {
    type : GET_TEAMS,
    payload: {
      teams: normalize(teams, teamSchemas)
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

export function createTeamSuccess (message) {
  return {
    type: CREATE_TEAM_SUCCESS,
    payload: {
      createTeamStatus: true,
      isFetching: false,
      message: message
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
      return state.set('projects', action.payload.projects.entities.projects)
    case GET_TEAMS:
      return state.set('teams', action.payload.teams.entities.team)
    case CREATE_TEAM_REQUEST: {
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching
      })
    }
    case CREATE_TEAM_SUCCESS: {
      return Object.assign({}, state, {
        createTeamStatus: action.payload.createTeamStatus,
        isFetching: action.payload.isFetching,
        message: action.payload.message
      })
    }
    case CREATE_TEAM_ERROR: {
      return Object.assign({}, state, {
        createTeamStatus: action.payload.createTeamStatus,
        isFetching: action.payload.isFetching,
        message: action.payload.message
      })
    }
    default:
      return state
  }
}

export default fetchTeamProjectReducer
