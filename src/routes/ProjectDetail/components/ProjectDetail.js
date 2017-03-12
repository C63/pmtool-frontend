import React from 'react'
import classNames from 'classnames'

import CardList from '../../../components/CardList/CardList'
import NewCardList from '../../../components/CardList/NewCardList/NewCardList'
import lists from './MOCK_DATA.json'
import TopMenu from '../../../components/TopMenu/TopMenu'
import SideMenu from '../../../components/SideMenu/SideMenu'

export default class ProjectDetail extends React.Component {
  constructor () {
    super()
    this.state = {
      listMode: 'vertical'
    }
  }

  switchViewMode () {
    const { listMode } = this.state
    if (listMode === 'horizontal') {
      this.setState({
        listMode: 'vertical'
      })
    } else {
      this.setState({
        listMode: 'horizontal'
      })
    }
  }

  render () {
    const { listMode } = this.state
    return (
      <div className='main-container'>
        <SideMenu />
        <div className='project-detail'>
          <TopMenu />
          <div className='list-mode'>
            <i className={classNames('material-icons', { 'active': listMode === 'horizontal' })}
              onClick={() => this.switchViewMode()}>
              view_module
            </i>
            <i className={classNames('material-icons', { 'active': listMode === 'vertical' })}
              onClick={() => this.switchViewMode()}>
              list
            </i>
          </div>
          <div className={classNames('list-container', 'list-container__' + listMode)}>
            { lists.map((list) => {
              return (
                <CardList key={list.id} list={list} listMode={listMode} />
              )
            })}
            <NewCardList />
          </div>
        </div>
      </div>
    )
  }
}

ProjectDetail.propTypes = {
  doLogOut: React.PropTypes.func
}
