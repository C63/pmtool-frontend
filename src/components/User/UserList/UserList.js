import React from 'react'
import Immutable from 'immutable'
import UserItem from '../UserItem/UserItem'
import AddMemberPopover from '../../Popover/AddMemberPopover/AddMemberPopover'

export default class UserList extends React.Component {
  render () {
    const { users, className } = this.props
    return users ? (
      <div className={className}>
        { users.map((user, index) => {
          return (
            <UserItem key={index} user={user} boxOnlyMode />
          )
        })}
        <AddMemberPopover users={users} />
      </div>
    ) : null
  }
}

UserList.propTypes = {
  users: React.PropTypes.instanceOf(Immutable.List),
  className: React.PropTypes.string
}
