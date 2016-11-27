import React from 'react'
import UserItem from '../User/UserItem/UserItem'
import { Link } from 'react-router'
export default class SideMenu extends React.Component
{
  render () {
    const user = {
      full_name: 'Phuc Doan'
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
      </div>
    )
  }
}
