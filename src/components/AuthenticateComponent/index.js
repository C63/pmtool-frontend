import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import get from 'lodash/get'
import './index.scss'

export function requireAuthentication (Component) {
  class AuthenticatedComponent extends React.Component {

    componentWillMount () {
      this.checkAuth()
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth()
    }

    checkAuth () {
      if (this.props.isFetching || !this.props.token) {
        browserHistory.push(`/`)
      }
    }

    render () {
      return (
        <div className='auth-container'>
          {!this.props.isFetching && this.props.token
              ? <Component {...this.props} />
              : null
          }
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      isFetching: get(state, 'login.isFetching')
    }
  }

  AuthenticatedComponent.propTypes = {
    isFetching : React.PropTypes.bool,
    location: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    token: React.PropTypes.string
  }

  AuthenticatedComponent.defaultProps = {
    token : localStorage.getItem('userToken')
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}
