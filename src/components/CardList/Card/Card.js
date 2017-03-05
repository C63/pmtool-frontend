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
  }
  toggleModal () {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen
    })
  }
  renderCardModal () {
    const { isOpen } = this.state
    const { card } = this.props

    if (isOpen) {
      return <CardModal isOpen={isOpen} closeModal={this.toggleModal} card={card} />
    }
    return
  }
  render () {
    const { card, listMode } = this.props
    const CardModal = this.renderCardModal()
    return (
      <div className='card-wrap'>
        { listMode === 'vertical' &&
          <div className={classNames('card', listMode)} onClick={this.toggleModal}>
            <div className='card__userbox'>
              <UserList users={card.users} className='card__users' />
            </div>
            <div className='card__header'>
              <DateBox className='card__header__date' date={card.date_created} />
              <MessageBox className='card__header__message' messages={card.messages} />
            </div>
            <div className='card__content'>
              <p>{card.card_content}</p>
            </div>
            <TagList tags={card.tags} className='card__tags' />
            { CardModal }
          </div>
        }

        { listMode === 'horizontal' &&
          <div className={classNames('card', listMode)} onClick={this.toggleModal}>
            <div className='card-left col-sm-8'>
              <div className='card__content'>
                <p>{card.card_content}</p>
              </div>
              <div className='card__userbox'>
                <UserList users={card.users} className='card__users' />
              </div>
            </div>
            <div className='card-right col-sm-4'>
              <TagList tags={card.tags} className='card__tags' />
              <div className='card__header'>
                <DateBox className='card__header__date' date={card.date_created} />
                <MessageBox className='card__header__message' messages={card.messages} />
              </div>
            </div>
            { CardModal }
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
