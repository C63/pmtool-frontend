import React from 'react'
import Immutable from 'immutable'
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
      'content' : findDOMNode(this.refs.comment_desc).value,
      'taskId' : this.props.taskId
    })
  }
  render () {
    const { className } = this.props
    const user = Immutable.fromJS(JSON.parse(localStorage.getItem('userInfo')))

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
  user : React.PropTypes.instanceOf(Immutable.Map),
  className: React.PropTypes.string,
  addComment: React.PropTypes.func,
  taskId: React.PropTypes.string
}

const mapStatetoProps = () => ({})
const mapDispatchtoProps = (dispatch) => ({
  addComment: (params) => dispatch(addComment(params))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(CommentBox)
