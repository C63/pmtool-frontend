import React from 'react'
import ProjectList from '../ProjectList'

class ProjectTeamList extends React.Component {

  render () {
    const { projects } = this.props
    return (
      <div className='project-teams'>
        { projects.map((project, index) => {
          return (
            <div className='team' key={index}>
              <p className='team__name'>{project.name}</p>
              <ProjectList projects={project.projects} />
            </div>
          )
        })}
      </div>
    )
  }

}

export default ProjectTeamList

ProjectTeamList.propTypes = {
  projects: React.PropTypes.array
}
