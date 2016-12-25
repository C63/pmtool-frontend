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
      if (this.props.isFetching || !this.props.userToken) {
        browserHistory.push(`/login`)
      }
    }

    render () {
      return (
        <div className='auth-container'>
          {!this.props.isFetching && this.props.userToken
              ? <Component {...this.props} />
              : null
          }
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      userToken: get(state, 'login.userToken'),
      isFetching: get(state, 'login.isFetching')
    }
  }

  AuthenticatedComponent.propTypes = {
    isFetching : React.PropTypes.bool,
    location: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    userToken: React.PropTypes.string
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}
