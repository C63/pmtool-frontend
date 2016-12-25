import React from 'react'
import ProjectList from '../ProjectList'
import { Scrollbars } from 'react-custom-scrollbars'

class ProjectTeamList extends React.Component {

  render () {
    const { projects } = this.props
    return (
      <div className='project-teams'>
        <Scrollbars autoHide>
          { projects.map((project, index) => {
            return (
              <div className='team' key={index}>
                <p className='team__name'>{project.name}</p>
                <ProjectList projects={project.projects} />
              </div>
            )
          })}
        </Scrollbars>
      </div>
    )
  }

}

export default ProjectTeamList

ProjectTeamList.propTypes = {
  projects: React.PropTypes.array
}
