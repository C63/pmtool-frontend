import React from 'react'
import CardList from '../../../components/CardList/CardList'
import NewCardList from '../../../components/CardList/NewCardList/NewCardList'
import lists from './MOCK_DATA.json'
import TopMenu from '../../../components/TopMenu/TopMenu'
import SideMenu from '../../../components/SideMenu/SideMenu'
export default class ProjectDetail extends React.Component
{

  render () {
    return (
      <div className='main-container'>
        <SideMenu />
        <div className='project-detail'>
          <TopMenu />
          <div className='list-container'>
            { lists.map((list) => {
              return (
                <CardList key={list.id} list={list} />
              )
            })}
            <NewCardList />
          </div>
        </div>
      </div>
    )
  }
}
