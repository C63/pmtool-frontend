import React from 'react'
import UserList from '../../User/UserList/UserList'
import TagList from '../../Tag/TagList'
import CardModal from '../../Modal/CardModal/CardModal'
import DateBox from '../../Common/DateBox/DateBox'
import MessageBox from '../../Common/MessageBox/MessageBox'

export default class Card extends React.Component
{
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
    const { card } = this.props
    const CardModal = this.renderCardModal()
    return (
      <div className='card' onClick={this.toggleModal}>
        <div className=''>
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
    )
  }
}

Card.propTypes = {
  card : React.PropTypes.object,
  onClick: React.PropTypes.func
}
