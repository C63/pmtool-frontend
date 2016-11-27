import React from 'react'
import { Link } from 'react-router'

class ProjectList extends React.Component {
  render () {
    const { projects } = this.props

    return (
      <div className='team__projects'>
        <div className='row'>
          {projects.map((project, index) => {
            return (
              <div className='col-sm-3 team__projects__box' key={index} >
                <div className='team__projects__project'>
                  <Link to={`/project`}>
                    <span>{project.name}</span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default ProjectList

ProjectList.propTypes = {
  projects: React.PropTypes.array
}
