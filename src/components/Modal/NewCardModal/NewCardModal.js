import React from 'react'
import Immutable from 'immutable'
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

import CoreModal from '../CoreModal'
import UserList from '../../User/UserList/UserList'
import { addTask } from '../../../store/api'

class NewCardModal extends React.Component {
  constructor () {
    super()
    this.onAddTask = this.onAddTask.bind(this)
  }

  onAddTask (e) {
    e.preventDefault()
    this.props.closeModal()
    this.props.addTask({
      'name' : findDOMNode(this.refs.task_name).value,
      'description': findDOMNode(this.refs.task_desc).value,
      'task-list-id': this.props.taskListId
    })
  }
  render () {
    const { isOpen, closeModal } = this.props
    const users = Immutable.List().push(Immutable.fromJS(JSON.parse(localStorage.getItem('userInfo'))))

    return (
      <CoreModal isOpen={isOpen} closeModal={closeModal}>
        <form className='new-card-modal' onSubmit={this.onAddTask}>
          <Modal.Header closeButton>
            <h2>Add new task</h2>
          </Modal.Header>
          <Modal.Body>
            <div className='new-card-modal'>
              <FormGroup>
                <h3>Task name</h3>
                <FormControl placeholder='Insert task name' ref='task_name' />
                <h3>Description</h3>
                <FormControl placeholder='Insert task description' ref='task_desc' />
                <h3>People</h3>
                <UserList users={users} className='new-card-modal__people' />
              </FormGroup>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type='submit'>Add task</Button>
          </Modal.Footer>
        </form>
      </CoreModal>
    )
  }
}

NewCardModal.propTypes = {
  isOpen : React.PropTypes.bool,
  closeModal : React.PropTypes.func,
  addTask: React.PropTypes.func,
  taskListId: React.PropTypes.string
}
const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
  addTask: (params) => dispatch(addTask(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewCardModal)
