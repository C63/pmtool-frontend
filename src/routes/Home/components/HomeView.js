import React from 'react'
import CardList from '../../../components/CardList/CardList'
import NewCardList from '../../../components/NewCardList/NewCardList'
import lists from './MOCK_DATA.json'
import CardModal from '../../../components/CardModal/CardModal'
export default class HomeView extends React.Component
{
  constructor () {
    super()
    this.state = {
      openModal: false
    }
  }
  toggleModal () {
    this.setState({
      openModal: !this.state.openModal
    })
  }
  render () {
    const { openModal } = this.state
    return (
      <div className='page-home'>
        <div className='container-fluid'>
          <div className='list-container'>
            { lists.map((list) => {
              return (
                <CardList key={list.id} list={list} toggleModal={this.toggleModal.bind(this)} />
              )
            })}
            <NewCardList />
            <CardModal showModal={openModal} toggleModal={this.toggleModal.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}
