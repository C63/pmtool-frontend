import React from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import { getComments } from '../../../store/api'
import CoreModal from '../CoreModal'
import UserList from '../../User/UserList/UserList'
import DateBox from '../../Common/DateBox/DateBox'
import MessageBox from '../../Common/MessageBox/MessageBox'
import CommentBox from '../../Common/CommentBox/CommentBox'
import CommentList from '../../Comment/CommentList/CommentList'

class CardModal extends React.Component {

  componentWillMount () {
    this.props.fetchComments(this.props.card.get('task-id'))
  }
  render () {
    const { isOpen, card, closeModal, comments } = this.props

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
                {card.get('name')}
                <p className='card-modal__header__status'>
                  Started
                </p>
              </span>
            </div>
            <UserList users={card.get('accounts')} className='card-modal__userlist' />
            <div className='card-modal__task-description'>
              <h3>Task Description</h3>
              <p>{card.get('task-description') ? card.get('task-description') : 'No description'}</p>
            </div>
            <div className='card-modal__activity'>
              <h3>Activity</h3>
              <CommentBox className={'card-modal__activity__comment-box'} taskId={card.get('task-id')} />
            </div>
            <CommentList comments={comments} className='card-modal__comments' />
          </Modal.Body>
        </div>
      </CoreModal>
    )
  }
}

CardModal.propTypes = {
  isOpen : React.PropTypes.bool,
  closeModal : React.PropTypes.func,
  card: React.PropTypes.object,
  fetchComments: React.PropTypes.func,
  comments: React.PropTypes.instanceOf(Immutable.List)
}

CardModal.defaultProps = {
  card : Immutable.List()
}

const mapStatetoProps = (state) => {
  return {
    comments: state.project.get('comments')
  }
}
const mapDispatchtoProps = (dispatch) => ({
  fetchComments : (taskId) => dispatch(getComments(taskId))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(CardModal)
