import React from 'react'
import ProjectTeamList from '../../../components/Project/ProjectTeamList'
import TopMenu from '../../../components/TopMenu/TopMenu'
import SideMenu from '../../../components/SideMenu/SideMenu'

class Projects extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
  }
  componentWillMount () {
    const { fetchUserTeam, fetchTeamProject } = this.props
    fetchUserTeam()
    fetchTeamProject()
  }

  render () {
    const { teams, projects } = this.props
    const user = JSON.parse(sessionStorage.getItem('userInfo'))
    return (
      <div className='main-container'>
        <SideMenu onLogout={this.props.doLogOut} user={user} />
        <div className='projects-dashboard'>
          <TopMenu />
          <ProjectTeamList teams={teams} projects={projects} />
        </div>
      </div>
    )
  }

}

Projects.propTypes = {
  doLogOut: React.PropTypes.func,
  getProfile: React.PropTypes.func,
  user: React.PropTypes.object,
  fetchUserTeam: React.PropTypes.func,
  fetchTeamProject: React.PropTypes.func,
  addTeam: React.PropTypes.func,
  teams: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ]),
  projects: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
}

export default Projects
