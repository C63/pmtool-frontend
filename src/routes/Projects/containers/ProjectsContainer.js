import { connect } from 'react-redux'
import { logOut } from '../../../routes/Login/modules/login'
import { getUserProfile } from '../../../store/api'
import { bindActionCreators } from 'redux'

import Projects from '../components/Projects'

const mapStateToProps = (state) => ({
  projects : state.projects.projects
})

const mapDispatchToProps = (dispatch) => ({
  doLogOut: bindActionCreators(logOut, dispatch),
  getProfile: bindActionCreators(getUserProfile, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
