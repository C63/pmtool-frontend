import { connect } from 'react-redux'
import { getUserTeam, getTeamProject } from '../../../store/api'

import Projects from '../components/Projects'

const mapStateToProps = (state) => ({
  projects : state.projects.get('projects'),
  teams: state.projects.get('teams')
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserTeam: () => (dispatch(getUserTeam())),
  fetchTeamProject: () => (dispatch(getTeamProject()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
