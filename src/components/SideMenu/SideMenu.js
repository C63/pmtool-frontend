import React from 'react'
import UserItem from '../User/UserItem/UserItem'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import Immutable from 'immutable'
import classNames from 'classnames'

class SideMenu extends React.Component {

  render () {
    const user = Immutable.fromJS(JSON.parse(localStorage.getItem('userInfo')))
    const logOut = () => {
      localStorage.clear()
      browserHistory.push('/')
    }

    const { pathname } = this.props

    return (
      <div className='side-menu'>
        <div className='side-menu__user'>
          <UserItem user={user} displayDirection='horizontal' />
          <i className='material-icons'>notifications</i>
        </div>
        <div className='side-menu__links'>
          <Link to={`/projects`} className={classNames({ 'active' : pathname.includes('project') })}>
            <i className='material-icons'>dashboard</i>
            <span>Dashboard</span>
          </Link>
          <Link to={`/team`} className={classNames({ 'active' : pathname.includes('team') })}>
            <i className='material-icons'>people</i>
            <span>Members</span>
          </Link>
        </div>
        <div className='side-menu__logout'>
          <Button onClick={logOut}>Logout</Button>
        </div>
      </div>
    )
  }
}

SideMenu.propTypes = {
  pathname: React.PropTypes.string
}

const mapStatetoProps = (state) => ({
  pathname: state.location.pathname
})
export default connect(mapStatetoProps)(SideMenu)
