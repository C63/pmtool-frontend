import React from 'react'

export default class User extends React.Component
{
  render () {
    const { user } = this.props
    return (
      <div className='user'>
        <span>{user.full_name.replace(/[^A-Z]/g, '')}</span>
      </div>
    )
  }
}

User.propTypes = {
  user: React.PropTypes.object
}
