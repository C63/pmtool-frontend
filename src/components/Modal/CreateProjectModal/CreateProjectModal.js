import React from 'react'
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

import CoreModal from '../CoreModal'
import { createTeamProject } from '../../../store/api'

class CreateProjectModal extends React.Component {

  constructor () {
    super()
    this.addTeamProject = this.addTeamProject.bind(this)
  }

  addTeamProject (e) {
    e.preventDefault()
    this.props.closeModal()
    this.props.addTeamProject({
      'name' : findDOMNode(this.refs.project_name).value,
      'description': findDOMNode(this.refs.project_desc).value,
      'team-id': this.props.teamId
    })
  }
  render () {
    const { isOpen = true, closeModal } = this.props
    return (
      <CoreModal isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={this.addTeamProject} className='new-card-modal'>
          <Modal.Header closeButton>
            <h2>Add new team project</h2>
          </Modal.Header>
          <Modal.Body>
            <FormGroup className='new-card-modal'>
              <h3>Project name</h3>
              <FormControl placeholder='Enter project name' ref='project_name' />
              <h3>Description</h3>
              <FormControl placeholder='Enter project description' ref='project_desc' />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button type='submit'>Add project</Button>
          </Modal.Footer>
        </form>
      </CoreModal>
    )
  }
}

CreateProjectModal.propTypes = {
  isOpen: React.PropTypes.bool,
  addTeamProject: React.PropTypes.func,
  closeModal: React.PropTypes.func,
  teamId: React.PropTypes.string
}

const mapDispatchToProps = (dispatch) => ({
  addTeamProject: (params) => (dispatch(createTeamProject(params)))
})

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectModal)
