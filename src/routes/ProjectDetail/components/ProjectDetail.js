import React from 'react'
import classNames from 'classnames'

import CardList from '../../../components/CardList/CardList'
import NewCardList from '../../../components/CardList/NewCardList/NewCardList'
import TopMenu from '../../../components/TopMenu/TopMenu'
import SideMenu from '../../../components/SideMenu/SideMenu'

class ProjectDetail extends React.Component {
  constructor () {
    super()
    this.state = {
      listMode: 'vertical'
    }
  }

  getChildContext () {
    return { projectId: this.props.params.projectId }
  }

  componentWillMount () {
    const { params } = this.props
    this.props.fetchTaskListId(params.projectId)
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
    const { lists } = this.props
    return (
      <div className='main-container'>
        <SideMenu />
        <div className='project-detail'>
          <TopMenu />
          <div className='list-mode'>
            <i className={classNames('material-icons', { 'active': listMode === 'horizontal' })}
              onClick={() => this.switchViewMode()}>
              list
            </i>
            <i className={classNames('material-icons', { 'active': listMode === 'vertical' })}
              onClick={() => this.switchViewMode()}>
              view_module
            </i>
          </div>
          <div className={classNames('list-container', 'list-container__' + listMode)}>
            { !lists.isEmpty() &&
              lists.map((list, index) => {
                return (
                  <CardList key={index} list={list} listMode={listMode} />
                )
              })
            }

            { lists.isEmpty() &&
              ''
            }
            <NewCardList />
          </div>
        </div>
      </div>
    )
  }
}

ProjectDetail.propTypes = {
  fetchTaskListId: React.PropTypes.func,
  params: React.PropTypes.object,
  lists: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
}

ProjectDetail.childContextTypes = {
  projectId: React.PropTypes.string
}

export default ProjectDetail
