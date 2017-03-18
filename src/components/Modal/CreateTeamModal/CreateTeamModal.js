import React from 'react'
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

import CoreModal from '../CoreModal'
import { createTeam } from '../../../store/api'

class CreateTeamModal extends React.Component {

  constructor () {
    super()
    this.addTeam = this.addTeam.bind(this)
  }

  addTeam (e) {
    e.preventDefault()
    this.props.closeModal()
    this.props.addTeam({
      'name' : findDOMNode(this.refs.team_name).value,
      'desc': findDOMNode(this.refs.team_desc).value
    })
  }
  render () {
    const { isOpen = true, closeModal } = this.props
    return (
      <CoreModal isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={this.addTeam} className='new-card-modal'>
          <Modal.Header closeButton>
            <h2>Add new team</h2>
          </Modal.Header>
          <Modal.Body>
            <FormGroup className='new-card-modal'>
              <h3>Team name</h3>
              <FormControl placeholder='Enter team name' ref='team_name' />
              <h3>Description</h3>
              <FormControl placeholder='Enter team description' ref='team_desc' />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button type='submit'>Add team</Button>
          </Modal.Footer>
        </form>
      </CoreModal>
    )
  }
}

CreateTeamModal.propTypes = {
  isOpen: React.PropTypes.bool,
  addTeam: React.PropTypes.func,
  closeModal: React.PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  addTeam: (params) => (dispatch(createTeam(params)))
})

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeamModal)
