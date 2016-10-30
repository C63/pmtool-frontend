import React from 'react'
import UserItem from '../../User/UserItem/UserItem'
import moment from 'moment'
export const CommentItem = ({ comment, className }) => (
  <div className={className}>
    <UserItem user={comment.user} displayDirection='vertical' />
    <time>{ moment(comment.create_date).format('HH.MM MMM DD YYYY') }</time>
    <p className={className + '__content'}>{comment.content}</p>
  </div>
)

CommentItem.propTypes = {
  comment : React.PropTypes.object,
  className: React.PropTypes.string
}

export default CommentItem
