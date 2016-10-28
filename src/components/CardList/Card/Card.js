import React from 'react'
import UserList from '../../User/UserList/UserList'
import TagList from '../../TagList/TagList'
import CardModal from '../../Modal/CardModal/CardModal'
import DateBox from '../../DateBox/DateBox'

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
  render () {
    const { card } = this.props
    const { isOpen } = this.state
    return (
      <div className='card' onClick={this.toggleModal}>
        <div className=''>
          <UserList users={card.users} className='card__users' />
        </div>
        <div className='card__header'>
          <DateBox className='card__header__date' date={card.date_created} />
          <div className='card__header__message'>
            <i className='material-icons'>question_answer</i>
            <span>{ card.messages.length }</span>
          </div>
        </div>
        <div className='card__content'>
          <p>{card.card_content}</p>
        </div>
        <TagList tags={card.tags} className='card__tags' />
        { isOpen && <CardModal isOpen={isOpen} closeModal={this.toggleModal} card={card} /> }
      </div>
    )
  }
}

Card.propTypes = {
  card : React.PropTypes.object,
  onClick: React.PropTypes.func
}
