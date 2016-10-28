import React from 'react'
import UserItem from '../UserItem/UserItem'
export default class UserList extends React.Component
{
  render () {
    const { users, className } = this.props
    return (
      <div className={className}>
        { users.map((user, index) => {
          return (
            <UserItem key={index} user={user} />
          )
        })}
      </div>
    )
  }
}

UserList.propTypes = {
  users: React.PropTypes.array,
  className: React.PropTypes.string
}
