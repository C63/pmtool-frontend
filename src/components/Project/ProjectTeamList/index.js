import React from 'react'
import { Button } from 'react-bootstrap'

import ProjectList from '../ProjectList'
import CreateTeamModal from '../../Modal/CreateTeamModal/CreateTeamModal'
import CreateProjectModal from '../../Modal/CreateProjectModal/CreateProjectModal'

class ProjectTeamList extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
      isProjectModalOpen: false,
      teamId: ''
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.toggleProjectModal = this.toggleProjectModal.bind(this)
  }

  toggleModal () {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen
    })
  }

  toggleProjectModal (teamId) {
    const { isProjectModalOpen } = this.state
    this.setState({
      isProjectModalOpen: !isProjectModalOpen,
      teamId: teamId
    })
  }

  render () {
    const { teams, projects } = this.props
    const isEmptyTeam = teams.isEmpty()
    return (
      <div className='project-teams'>
        <div className='team'>
          <div className='team__header'>
            <span className='team__name' />
            <Button onClick={() => this.toggleProjectModal()}>+</Button>
          </div>
          <ProjectList projects={projects} />
        </div>
        { !isEmptyTeam &&
          teams.map((team, index) => {
            return (
              <div className='team' key={index}>
                <div className='team__header'>
                  <span className='team__name'>{team.get('name')}</span>
                  <Button onClick={() => this.toggleProjectModal(team.get('team-id'))}>+</Button>
                </div>
                <ProjectList projects={team.get('projects')} />
              </div>
            )
          })}
        {
          isEmptyTeam &&
          <div className='project-teams__noteam' />
        }
        <div className='project-teams__new-team'>
          <Button onClick={this.toggleModal}>Add new team</Button>
          { this.state.isOpen &&
            <CreateTeamModal closeModal={this.toggleModal} />
          }
        </div>
        { this.state.isProjectModalOpen &&
          <CreateProjectModal closeModal={this.toggleProjectModal} teamId={this.state.teamId} />
        }
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
  ]),
  projects: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
}

export default ProjectTeamList
