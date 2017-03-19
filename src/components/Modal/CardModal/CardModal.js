import React from 'react'
import { Modal } from 'react-bootstrap'
import CoreModal from '../CoreModal'
import UserList from '../../User/UserList/UserList'
import DateBox from '../../Common/DateBox/DateBox'
import MessageBox from '../../Common/MessageBox/MessageBox'
import CommentBox from '../../Common/CommentBox/CommentBox'
import CommentList from '../../Comment/CommentList/CommentList'

export default class CardModal extends React.Component {
  render () {
    const { isOpen, card, closeModal } = this.props
    return (
      <CoreModal isOpen={isOpen} closeModal={closeModal} >
        <div className='card-modal'>
          <Modal.Header closeButton />
          <Modal.Body>
            <div className='card-modal__status'>
              <DateBox className='card-modal__status__date' date={card.get('date_created')} />
              <MessageBox className='card-modal__status__message' messages={card.get('messages')} />
              <div className='card-modal__status__star'>
                <i className='material-icons'>star_border</i>
                <i className='material-icons'>star_border</i>
                <i className='material-icons'>star_border</i>
                <i className='material-icons'>star_border</i>
                <i className='material-icons'>star_border</i>
              </div>
            </div>
            <div className='card-modal__header'>
              <span className='card-modal__header__title'>
                {card.get('description')}
                <p className='card-modal__header__status'>
                  Started
                </p>
              </span>
            </div>
            <UserList className='card-modal__userlist' />
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
              <CommentBox className={'card-modal__activity__comment-box'} />
            </div>
            <CommentList comments={card.get('comments')} className='card-modal__comments' />
          </Modal.Body>
        </div>
      </CoreModal>
    )
  }
}

CardModal.propTypes = {
  isOpen : React.PropTypes.bool,
  closeModal : React.PropTypes.func,
  card: React.PropTypes.object
}
