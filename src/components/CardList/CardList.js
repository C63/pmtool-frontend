import React from 'react'
import Card from './Card/Card'
import NewCardModal from '../Modal/NewCardModal/NewCardModal'
import { Scrollbars } from 'react-custom-scrollbars'

export default class CardList extends React.Component
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
    const { list } = this.props

    if (isOpen) {
      return <NewCardModal isOpen={isOpen} closeModal={this.toggleModal} cards={list.cards} />
    }
    return
  }
  render () {
    const { list, listMode } = this.props
    const NewCardModal = this.renderCardModal()
    return (
      <div className='card-list'>
        <div className='card-list__header'>
          <span className='card-list__header__name'>{list.list_name}</span>
          <span className='card-list__header__counter'>{list.cards.length}</span>
          <span className='card-list__header__right'>
            <span className='plus' onClick={this.toggleModal}>+</span>
            <span className='dots'>...</span>
          </span>
          {NewCardModal}
        </div>
        { listMode === 'vertical' &&
          <Scrollbars autoHide >
            { list.cards.map((card) => {
              return (
                <Card key={card.id} card={card} listMode={listMode} />
              )
            })}
          </Scrollbars>
        }

        { listMode === 'horizontal' &&
          list.cards.map((card) => {
            return (
              <Card key={card.id} card={card} listMode={listMode} />
            )
          })
        }
      </div>
    )
  }
}

CardList.propTypes = {
  list: React.PropTypes.object,
  toggleModal: React.PropTypes.func,
  listMode: React.PropTypes.string
}
