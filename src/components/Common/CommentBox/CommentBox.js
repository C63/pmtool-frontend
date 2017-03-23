import React from 'react'
import { Button, FormControl, FormGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'

import { addComment } from '../../../store/api'
import UserItem from '../../User/UserItem/UserItem'

class CommentBox extends React.Component {
  constructor () {
    super()
    this.onAddComment = this.onAddComment.bind(this)
  }

  onAddComment (e) {
    e.preventDefault()
    this.props.addComment({
      'desc' : findDOMNode(this.refs.comment_desc).value
    })
  }
  render () {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const { className } = this.props
    return (
      <form className={className} onSubmit={this.onAddComment}>
        <FormGroup>
          <FormControl placeholder='Comment' ref='comment_desc' />
          <div className={className + '__bottom'}>
            <UserItem user={user} displayDirection='horizontal' />
            <div className={className + '__bottom__buttons'}>
              <Button type='submit'>Add</Button>
              <Button>Cancel</Button>
            </div>
          </div>
        </FormGroup>
      </form>
    )
  }
}

CommentBox.propTypes = {
  user : React.PropTypes.object,
  className: React.PropTypes.string,
  addComment: React.PropTypes.func
}

const mapStatetoProps = () => ({})
const mapDispatchtoProps = (dispatch) => ({
  addComment: (params) => dispatch(addComment(params))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(CommentBox)
