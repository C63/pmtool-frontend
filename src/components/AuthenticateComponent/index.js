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
      const token = localStorage.getItem('userToken')

      if (this.props.isFetching || !token) {
        browserHistory.push(`/`)
      }
    }

    render () {
      const token = localStorage.getItem('userToken')

      return (
        <div className='auth-container'>
          {!this.props.isFetching && token
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
    location: React.PropTypes.object
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}
