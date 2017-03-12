import { connect } from 'react-redux'
import { getUserTeam, getTeamProject } from '../../../store/api'

import Projects from '../components/Projects'

const mapStateToProps = (state) => ({
  projects : state.projects.projects,
  teams: state.projects.teams
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserTeam: () => (dispatch(getUserTeam())),
  fetchTeamProject: () => (dispatch(getTeamProject()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
