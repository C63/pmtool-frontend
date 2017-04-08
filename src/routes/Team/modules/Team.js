import Immutable from 'immutable'

export const GET_TEAMS_INFO = 'GET_TEAMS_INFO'

export function getTeamInfo (teams) {
  return {
    type : GET_TEAMS_INFO,
    payload: {
      teams: teams
    }
  }
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.Map({
  teams: Immutable.List()
})
export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS_INFO:
      return state.merge(action.payload)
    default:
      return state
  }
}
