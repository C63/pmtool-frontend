import React from 'react'
import Card from './Card/Card'
import NewCard from './NewCard/NewCard'
export default class CardList extends React.Component
{

  render () {
    const { list, toggleModal } = this.props
    return (
      <div className='card-list'>
        <div className='card-list__header'>
          <span className='card-list__header__name'>{list.list_name}</span>
          <span className='card-list__header__counter'>{list.list_count}</span>
          <span className='card-list__header__dots'>...</span>
        </div>
        { list.cards.map((card) => {
          return (
            <Card key={card.id} card={card} onClick={toggleModal} />
          )
        })}
        <NewCard />
      </div>
    )
  }
}

CardList.propTypes = {
  list: React.PropTypes.object,
  toggleModal: React.PropTypes.func
}
