import React from 'react'
export const HORIZONTAL = 'horizontal'
export const VERTICAL = 'vertical'
export default class User extends React.Component {
  getUserClassName () {
    const { boxOnlyMode, displayDirection } = this.props
    if (boxOnlyMode) {
      return 'user__box-only'
    }
    if (displayDirection === HORIZONTAL) {
      return 'user__' + HORIZONTAL
    }
    return 'user__' + VERTICAL
  }

  render () {
    const { user } = this.props
    const className = this.getUserClassName()

    return (
      <div className={className}>
        <div className='user'>
          <span>{user.full_name.replace(/[^A-Z]/g, '')}</span>
        </div>
        <div className='user-detail'>
          <p>{user.full_name}</p>
          <p>@{user.full_name.split(' ')[0]}</p>
        </div>
      </div>
    )
  }
}

User.propTypes = {
  user: React.PropTypes.object,
  boxOnlyMode: React.PropTypes.bool,
  displayDirection: React.PropTypes.string
}
