import React from 'react'
import UserList from '../../User/UserList/UserList'
import TagList from '../../Tag/TagList'
import CardModal from '../../Modal/CardModal/CardModal'
import DateBox from '../../Common/DateBox/DateBox'
import MessageBox from '../../Common/MessageBox/MessageBox'
import classNames from 'classnames'

export default class Card extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.getTags = this.getTags.bind(this)
  }
  toggleModal () {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen
    })
  }

  getTags () {
    const { card } = this.props

    return card.get('task-description') ? this.props.card.get('task-description').split(/\s+/) : ['empty']
  }

  render () {
    const { card, listMode } = this.props
    return (
      <div className='card-wrap'>
        { listMode === 'vertical' &&
          <div className={classNames('card', listMode)} onClick={this.toggleModal}>
            <div className='card__userbox'>
              <UserList users={card.get('accounts')} className='card__users' />
            </div>
            <div className='card__header'>
              <DateBox className='card__header__date' date={card.get('date_created')} />
              <MessageBox className='card__header__message' messages={card.get('comments')} />
            </div>
            <div className='card__content'>
              <p>{card.get('task-description') ? card.get('task-description') : 'No description'}</p>
            </div>
            <TagList tags={this.getTags()} className='card__tags' />
            { this.state.isOpen &&
              <CardModal isOpen={this.state.isOpen} closeModal={this.toggleModal} card={card} />
            }
          </div>
        }

        { listMode === 'horizontal' &&
          <div className={classNames('card', listMode)} onClick={this.toggleModal}>
            <div className='card-left col-sm-8'>
              <div className='card__content'>
                <p>{card.get('task-description')}</p>
              </div>
              <div className='card__userbox'>
                <UserList users={card.get('accounts')} className='card__users' />
              </div>
            </div>
            <div className='card-right col-sm-4'>
              <TagList tags={this.getTags()} className='card__tags' />
              <div className='card__header'>
                <DateBox className='card__header__date' date={card.get('date_created')} />
                <MessageBox className='card__header__message' messages={card.get('messages')} />
              </div>
            </div>
            { this.state.isOpen &&
              <CardModal isOpen={this.state.isOpen} closeModal={this.toggleModal} card={card} />
            }
          </div>
        }
      </div>
    )
  }
}

Card.propTypes = {
  card : React.PropTypes.object,
  onClick: React.PropTypes.func,
  listMode: React.PropTypes.string
}
