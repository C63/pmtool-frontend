import React from 'react'
import Immutable from 'immutable'
import TeamList from '../../../components/Team/TeamList'
import TopMenu from '../../../components/TopMenu/TopMenu'
import SideMenu from '../../../components/SideMenu/SideMenu'

class Team extends React.Component {

  componentWillMount () {
    const { fetchUserTeam } = this.props
    fetchUserTeam()
  }

  render () {
    const { teams } = this.props

    return (
      <div className='main-container'>
        <SideMenu />
        <div className='projects-dashboard'>
          <TopMenu />
          <TeamList teams={teams} />
        </div>
      </div>
    )
  }

}

export default Team

Team.propTypes = {
  teams: React.PropTypes.instanceOf(Immutable.List),
  fetchUserTeam: React.PropTypes.func
}
