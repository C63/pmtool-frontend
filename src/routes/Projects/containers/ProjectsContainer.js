import { connect } from 'react-redux'
import { getUserProfile } from '../../../store/api'
import { bindActionCreators } from 'redux'

import Projects from '../components/Projects'

const mapStateToProps = (state) => ({
  projects : state.projects.projects
})

const mapDispatchToProps = (dispatch) => ({
  getProfile: bindActionCreators(getUserProfile, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
