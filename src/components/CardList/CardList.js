import React from 'react'
import Card from './Card/Card'
export default class CardList extends React.Component
{

  render () {
    const { list } = this.props
    return (
      <div className='card-list'>
        <div className='card-list__header'>
          <span className='card-list__header__name'>{list.list_name}</span>
          <span className='card-list__header__counter'>{list.list_count}</span>
          <span className='card-list__header__right'>
            <span className='plus'>+</span>
            <span className='dots'>...</span>
          </span>
        </div>
        { list.cards.map((card) => {
          return (
            <Card key={card.id} card={card} />
          )
        })}
      </div>
    )
  }
}

CardList.propTypes = {
  list: React.PropTypes.object,
  toggleModal: React.PropTypes.func
}
