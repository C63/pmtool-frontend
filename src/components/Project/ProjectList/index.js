import React from 'react'
import { Link } from 'react-router'

class ProjectList extends React.Component {
  render () {
    const { projects } = this.props

    return (
      <div className='team__projects'>
        <div className='row'>
          {projects &&
            projects.map((project, index) => {
              return (
                <div className='col-sm-3 team__projects__box' key={index} >
                  <div className='team__projects__project'>
                    <Link to={`/project/` + project.get('project-id')}>
                      <span>{project.get('name')}</span>
                    </Link>
                  </div>
                </div>
              )
            })}
          { !projects &&
            <div className='col-sm-12'>
              <div className='no-projects'>No projects</div>
            </div>
          }
        </div>
      </div>
    )
  }

}

ProjectList.propTypes = {
  projects: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
}

export default ProjectList
