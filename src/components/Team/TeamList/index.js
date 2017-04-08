import React from 'react'
import UserItem from '../../User/UserItem/UserItem'
import Immutable from 'immutable'

class TeamList extends React.Component {

  render () {
    const { teams } = this.props

    return (
      <div className='team-container'>
        <div className='team-list col-sm-8'>
          {!teams.isEmpty() && teams.map((t, index) => {
            return (
              <div className='team' key={index}>
                <div className='team__name' >
                  <span>{t.get('name')}</span>
                  <button className='team__member__addmore'>+</button>
                </div>
                <div className='team__members'>
                  {
                    t.get('accounts').map((mem, idx) => {
                      return (
                        <div className='team__members__member' key={idx}>
                          <UserItem user={mem} displayDirection='horizontal' />
                          <span className='team__members__member__role'>Members</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })}
          { teams.isEmpty() &&
            <div className='no-team'>You belong to no team</div>
          }
        </div>

        <div className='team-search-member col-sm-4'>
          <p>Search member</p>
          <input type='text' placeholder='Search members or teams' />
        </div>
      </div>
    )
  }

}

TeamList.propTypes = {
  teams: React.PropTypes.instanceOf(Immutable.List)
}

export default TeamList
