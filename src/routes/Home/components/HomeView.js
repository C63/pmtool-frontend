import React from 'react'
import CardList from '../../../components/CardList/CardList'
import NewCardList from '../../../components/CardList/NewCardList/NewCardList'
import lists from './MOCK_DATA.json'
import TopMenu from '../../../components/TopMenu/TopMenu'
import SideMenu from '../../../components/SideMenu/SideMenu'
import { browserHistory } from 'react-router'
export default class HomeView extends React.Component
{
  componentWillMount () {
    if (!localStorage.getItem('userToken')) {
      browserHistory.push('/login')
    }
  }
  render () {
    return (
      <div id='outer-container'>
        <SideMenu />
        <main id='page-wrap'>
          <TopMenu />
          <div className='page-home'>
            <div className='container-fluid'>
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
        </main>
      </div>
    )
  }
}
