import React from 'react'
import ProjectTeamList from '../../../components/Project/ProjectTeamList'
import TopMenu from '../../../components/TopMenu/TopMenu'
import SideMenu from '../../../components/SideMenu/SideMenu'

class Projects extends React.Component {

  render () {
    const { projects } = this.props
    return (
      <div className='main-container'>
        <SideMenu />
        <div className='projects-dashboard'>
          <TopMenu />
          <ProjectTeamList projects={projects} />
        </div>
      </div>
    )
  }

}

export default Projects

Projects.propTypes = {
  projects: React.PropTypes.array
}
