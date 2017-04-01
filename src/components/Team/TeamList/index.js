import React from 'react'
import UserItem from '../../User/UserItem/UserItem'

class TeamList extends React.Component {

  render () {
    const { team } = this.props

    return (
      <div className='team-container'>
        <div className='team-list col-sm-8'>
          {team.map((t, index) => {
            return (
              <div className='team'>
                <div className='team__name' key={index} >
                  <span>{t.name}</span>
                  <button className='team__member__addmore'>+</button>
                </div>
                <div className='team__members'>
                  {
                    t.members.map((mem, idx) => {
                      return (
                        <div className='team__members__member'>
                          <UserItem user={mem} displayDirection='horizontal' />
                          <span className='team__members__member__role'>{mem.role}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })}
        </div>

        <div className='team-search-member col-sm-4'>
          <p>Search member</p>
          <input type='text' placeholder='Search members or teams' />
        </div>
      </div>
    )
  }

}

export default TeamList

TeamList.propTypes = {
  team: React.PropTypes.array
}
