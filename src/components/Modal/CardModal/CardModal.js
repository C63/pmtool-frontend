import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import CoreModal from '../CoreModal'
import moment from 'moment'
import UserList from '../../User/UserList/UserList'
export default class CardModal extends React.Component
{
  renderCardModal () {
    const { card, closeModal } = this.props
    return (
      <div className='card-modal'>
        <Modal.Header closeButton />
        <Modal.Body>
          <div className='card-modal__status'>
            <div className='card-modal__status__date'>
              <i className='material-icons'>date_range</i>
              <time>{ moment(card.date_created).format('DD MMM') }</time>
            </div>
            <div className='card-modal__status__message'>
              <i className='material-icons'>question_answer</i>
              <span>{ card.messages.length }</span>
            </div>
            <div className='card-modal__status__star'>
              <i className='material-icons'>star_border</i>
              <i className='material-icons'>star_border</i>
              <i className='material-icons'>star_border</i>
              <i className='material-icons'>star_border</i>
              <i className='material-icons'>star_border</i>
            </div>
            <div className='card-modal__header'>
              <span className='card-modal__header__title'>
                {card.card_content}
              </span>
              <span className='card-modal__header__status'>
                Started
              </span>
            </div>
            <UserList className='card-modal__userlist' users={card.users} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
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

CardModal.propTypes = {
  isOpen : React.PropTypes.bool,
  closeModal : React.PropTypes.func,
  card: React.PropTypes.object
}
