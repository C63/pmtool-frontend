import React from 'react'
import { Modal } from 'react-bootstrap'
import CoreModal from '../CoreModal'
import UserList from '../../User/UserList/UserList'
import DateBox from '../../Common/DateBox/DateBox'
import MessageBox from '../../Common/MessageBox/MessageBox'
import CommentBox from '../../Common/CommentBox/CommentBox'
import CommentList from '../../Comment/CommentList/CommentList'
import comments from './mock_comments.json'

export default class CardModal extends React.Component
{
  renderCardModal () {
    const { card } = this.props
    return (
      <div className='card-modal'>
        <Modal.Header closeButton />
        <Modal.Body>
          <div className='card-modal__status'>
            <DateBox className='card-modal__status__date' date={card.date_created} />
            <MessageBox className='card-modal__status__message' messages={card.messages} />
            <div className='card-modal__status__star'>
              <i className='material-icons'>star_border</i>
              <i className='material-icons'>star_border</i>
              <i className='material-icons'>star_border</i>
              <i className='material-icons'>star_border</i>
              <i className='material-icons'>star_border</i>
            </div>
          </div>
          <div className='card-modal__header'>
            <p className='card-modal__header__title'>
              {card.card_content}
            </p>
            <p className='card-modal__header__status'>
              Started
            </p>
          </div>
          <UserList className='card-modal__userlist' users={card.users} />
          <div className='card-modal__task-description'>
            <h3>Task Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi consectetur ab voluptatum officiis architecto,
              officia dignissimos qui ipsa molestiae eligendi iusto facilis mollitia incidunt
              , eaque vero nemo eveniet autem nobis.
            </p>
          </div>
          <div className='card-modal__activity'>
            <h3>Activity</h3>
            <CommentBox user={card.users[0]} className={'card-modal__activity__comment-box'} />
          </div>
          <CommentList comments={comments} className='card-modal__comments' />
        </Modal.Body>
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
