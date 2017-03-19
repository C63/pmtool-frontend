import { connect } from 'react-redux'

import { getTaskListId } from '../../../store/api'

import ProjectDetail from '../components/ProjectDetail'

const mapStateToProps = (state) => ({
  lists: state.project.get('taskIds')
})

const mapDispatchToProps = (dispatch) => ({
  fetchTaskListId: (projectId) => dispatch(getTaskListId(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail)
