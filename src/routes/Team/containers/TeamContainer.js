import { connect } from 'react-redux'
import { getTeamList } from '../../../store/api'

import Team from '../components/Team'

const mapStateToProps = (state) => ({
  teams : state.team.get('teams')
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserTeam: () => (dispatch(getTeamList()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Team)
