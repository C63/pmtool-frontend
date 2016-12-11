import React from 'react'
import TeamList from '../../../components/Team/TeamList'
import TopMenu from '../../../components/TopMenu/TopMenu'
import SideMenu from '../../../components/SideMenu/SideMenu'

class Team extends React.Component {
  render () {
    const { team } = this.props
    console.log(team)
    return (
      <div className='main-container'>
        <SideMenu />
        <div className='projects-dashboard'>
          <TopMenu />
          <TeamList team={team} />
        </div>
      </div>
    )
  }

}

export default Team

Team.propTypes = {
  team: React.PropTypes.array
}
