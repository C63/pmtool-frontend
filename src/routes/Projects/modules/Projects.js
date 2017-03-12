import get from 'lodash/get'
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
const initialState = {
  fetchTeamProjectStatus: null,
  projects : {},
  teams: {},
  message: ''
}
export default function fetchTeamProjectReducer (state = initialState, action) {
  switch (action.type) {
    case GET_TEAM_PROJECT:
      if (!action.payload.teamId) {
        return Object.assign({}, state, {
          projects: action.payload.projects
        })
      } else {
        return Object.assign({}, state, {
          teams: state.teams.reduce(team => {
            if (action.payload.teamId === get(team, 'team-id')) {
              team.projects = action.payload.projects
            }
          })
        })
      }
    case GET_TEAMS:
      return Object.assign({}, state, {
        teams: action.payload.teams
      })
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
