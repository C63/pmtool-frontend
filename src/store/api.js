import get from 'lodash/get'
import { loginRequest, loginError, loginSuccess, getProfile } from '../routes/Login/modules/login'
import { signUpSuccess, signUpError, signUpRequest } from '../routes/SignUp/modules/signup'
import { addTaskRequest, addTaskSuccess, addTaskError,
         addListIdRequest, addListIdSuccess, addListIdError,
         getTaskListId as fetchTaskListId } from '../routes/ProjectDetail/modules'
import { getTeams, createTeamRequest, createTeamSuccess, createTeamError,
         getProjects, createProjectRequest, createProjectSuccess,
         createProjectError } from '../routes/Projects/modules/Projects'
import { DEV_URL } from './constant'
import { fetchPost, authGet, authPost } from '../utils/fetch'

export function doLogin (data) {
  return (dispatch) => {
    dispatch(loginRequest(data))
    fetch(DEV_URL + 'accounts/get-token', fetchPost(data))
    .then(response => {
      if (response.status === 200) {
        return response.json().then(data => {
          sessionStorage.setItem('userToken', get(data, 'access-token'))
          dispatch(getUserProfile())
          return dispatch(loginSuccess(data))
        })
      }
      return Promise.reject(response.statusText)
    })
    .catch(error => {
      sessionStorage.clear()
      return dispatch(loginError(error))
    })
  }
}

export function doSignUp (data) {
  return (dispatch) => {
    dispatch(signUpRequest(data))
    fetch(DEV_URL + 'accounts/register', fetchPost(data))
    .then(response => {
      if (response.status === 200) {
        return response.json().then(data => {
          sessionStorage.setItem('userToken', get(data, 'access-token'))
          dispatch(getUserProfile())
          return dispatch(signUpSuccess(data))
        })
      }
      return Promise.reject(response)
    })
    .catch(error => {
      sessionStorage.clear()
      return error.json().then(errmes => dispatch(signUpError(errmes.exception)))
    })
  }
}

export function addTask (params) {
  return (dispatch) => {
    dispatch(addTaskRequest(params))
    fetch(DEV_URL + 'tasks', authPost(params))
    .then(
      response => response.json().then(data => dispatch(addTaskSuccess(data))),
      error => error.json().then(err => dispatch(addTaskError(err)))
    )
  }
}

export function getUserProfile () {
  return (dispatch) => {
    fetch(DEV_URL + 'accounts/profile', authGet())
    .then(
      response => response.json().then(data => {
        sessionStorage.setItem('userInfo', JSON.stringify(data))
        return dispatch(getProfile())
      })
    )
  }
}

export function getUserTeam () {
  return (dispatch) => {
    fetch(DEV_URL + 'teams', authGet())
    .then(
      response => response.json().then(data => {
        return dispatch(getTeams(data))
      })
    )
  }
}

export function createTeam (params) {
  return (dispatch) => {
    dispatch(createTeamRequest(params))
    fetch(DEV_URL + 'teams', authPost(params))
    .then(response => {
      if (response.status === 201) {
        return response.json().then(team => {
          return dispatch(createTeamSuccess(team))
        })
      }
      return dispatch(createTeamError(response))
    })
    .catch(error => {
      return dispatch(createTeamError(error))
    })
  }
}

export function getTeamProject (teamId) {
  let url = teamId ? 'projects?teamId=' + teamId : 'projects'
  return (dispatch) => {
    fetch(DEV_URL + url, authGet())
    .then(
      response => response.json().then(data => {
        return dispatch(getProjects(data, teamId))
      })
    )
  }
}

export function createTeamProject (params) {
  return (dispatch) => {
    dispatch(createProjectRequest(params))
    fetch(DEV_URL + 'projects', authPost(params))
    .then(response => {
      if (response.status === 201) {
        return response.json().then(team => {
          return dispatch(createProjectSuccess(team))
        })
      }
      return dispatch(createProjectError(response))
    })
    .catch(error => {
      return dispatch(createProjectError(error))
    })
  }
}

/**
 * Get project task list
 * @params projectId
 */

export function getTaskListId (projectId) {
  return (dispatch) => {
    fetch(DEV_URL + 'task-lists?project-id=' + projectId, authGet())
    .then(
     response => response.json().then(data => {
       return dispatch(fetchTaskListId(data))
     })
    )
  }
}

/**
 * Add new list id
 * @param List name
 * @param List description
 * @param Project Id
 */

export function addListId (params) {
  return (dispatch) => {
    dispatch(addListIdRequest(params))
    fetch(DEV_URL + 'task-lists', authPost(params))
    .then(response => {
      if (response.status === 201) {
        return response.json().then(lists => {
          return dispatch(addListIdSuccess(lists))
        })
      }
      return dispatch(addListIdError(response))
    })
    .catch(error => {
      return dispatch(addListIdError(error))
    })
  }
}
