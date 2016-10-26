import React from 'react'
import Tag from '../../Tag/Tag'
import User from '../../User/User'
import moment from 'moment'
export default class Card extends React.Component
{
  render () {
    const { card, onClick } = this.props
    return (
      <div className='card' onClick={onClick}>
        <div className='card__user'>
          { card.users.map((user, index) => {
            return (
              <User key={index} user={user} />
            )
          })}
        </div>
        <div className='card__header'>
          <div className='card__header__date'>
            <i className='material-icons'>date_range</i>
            <time>{ moment(card.date_created).format('DD MMM') }</time>
          </div>
          <div className='card__header__message'>
            <i className='material-icons'>question_answer</i>
            <span>{ card.messages.length }</span>
          </div>
        </div>
        <div className='card__content'>
          <p>{card.card_content}</p>
        </div>
        <div className='card__tags'>
          { card.tags.map((tag, index) => {
            return (
              <Tag tag={tag} key={index} />
            )
          })}
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  card : React.PropTypes.object,
  onClick: React.PropTypes.func
}
