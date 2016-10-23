import React from 'react'
import CardList from '../../../components/CardList/CardList'
import lists from './MOCK_DATA.json'
export const HomeView = () => (
  <div className='page-home'>
    <div className='container-fluid'>
      <div className='list-container'>
        { lists.map((list) => {
          return (
            <CardList key={list.id} list={list} />
          )
        })}
      </div>
    </div>
  </div>
)

export default HomeView
