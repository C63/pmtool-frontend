import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logOut } from '../../../routes/Login/modules/login'

import ProjectDetail from '../components/ProjectDetail'

const mapDispatchToProps = (dispatch) => ({
  doLogOut: bindActionCreators(logOut, dispatch)
})

export default connect(() => ({}), mapDispatchToProps)(ProjectDetail)
