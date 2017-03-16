import isEmpty from 'lodash/isEmpty'
import React from 'react'
import ProjectList from '../ProjectList'
import { Scrollbars } from 'react-custom-scrollbars'
import { Button } from 'react-bootstrap'

class ProjectTeamList extends React.Component {

  render () {
    const { teams, createProject, addTeam } = this.props
    return (
      <div className='project-teams'>
        { !isEmpty(teams) &&
          <Scrollbars autoHide>
            { teams.map((team, index) => {
              return (
                <div className='team' key={index}>
                  <div className='team__header'>
                    <span className='team__name'>{team.get('name')}</span>
                    <Button onClick={createProject}>+</Button>
                  </div>
                  <ProjectList projects={team.projects} />
                </div>
              )
            })}
          </Scrollbars>
        }
        {
          isEmpty(teams) &&
          <div className='project-teams__noteam' />
        }
        <div className='project-teams__new-team'>
          <Button onClick={addTeam}>Add new team</Button>
        </div>
      </div>
    )
  }

}

ProjectTeamList.propTypes = {
  createProject: React.PropTypes.func,
  addTeam: React.PropTypes.func,
  teams: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
}

export default ProjectTeamList
