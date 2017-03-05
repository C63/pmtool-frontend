import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import CoreModal from '../CoreModal'
import UserList from '../../User/UserList/UserList'
export default class NewCardModal extends React.Component {
  renderCardModal () {
    const { cards } = this.props
    return (
      <div className='new-card-modal'>
        <Modal.Header closeButton>
          <h2>Add new task</h2>
        </Modal.Header>
        <Modal.Body>
          <div className='new-card-modal'>
            <h3>Task name</h3>
            <input type='text' placeholder='Lorem isum wao' />
            <h3>Description</h3>
            <input type='text' placeholder='Lirem isum dkm' />
            <h3>People</h3>
            <UserList users={cards[0].users} className='new-card-modal__people' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button>Add task</Button>
        </Modal.Footer>
      </div>
    )
  }
  render () {
    const { isOpen, closeModal } = this.props
    const cardModalContent = this.renderCardModal()
    return (
      <CoreModal isOpen={isOpen} closeModal={closeModal} children={cardModalContent} />
    )
  }
}

NewCardModal.propTypes = {
  isOpen : React.PropTypes.bool,
  closeModal : React.PropTypes.func,
  cards: React.PropTypes.array
}
