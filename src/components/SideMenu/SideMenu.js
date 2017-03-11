import React from 'react'
import UserItem from '../User/UserItem/UserItem'
import { Link, browserHistory } from 'react-router'
import { Button } from 'react-bootstrap'

const SideMenu = ({ onLogout }) => {
  const user = {
    full_name: 'Phuc Doan'
  }
// TODO: remove this passing Logout as props
  const logOut = () => {
    localStorage.clear()
    onLogout()
    browserHistory.push('/')
  }
  return (
    <div className='side-menu'>
      <div className='side-menu__user'>
        <UserItem user={user} displayDirection='horizontal' />
        <i className='material-icons'>notifications</i>
      </div>
      <div className='side-menu__links'>
        <Link to={`/dashboard`} className='active'>
          <i className='material-icons'>dashboard</i>
          <span>Dashboard</span>
        </Link>
        <Link to={`/settings`}>
          <i className='material-icons'>settings</i>
          <span>Settings</span>
        </Link>
      </div>
      <div className='side-menu__logout'>
        <Button onClick={logOut}>Logout</Button>
      </div>
    </div>
  )
}

SideMenu.propTypes = {
  onLogout: React.PropTypes.func
}

export default SideMenu
