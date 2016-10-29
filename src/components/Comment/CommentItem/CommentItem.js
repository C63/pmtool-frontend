import React from 'react'
import UserItem from '../../User/UserItem'
import moment from 'moment'
export const CommentItem = ({ comment, className }) => (
  <div className={className}>
    <UserItem user={comment.user} />
    <time>{ moment(comment.date).format('HH.MM MMM DD YYYY') }</time>
    <p>{comment.comment_content}</p>
  </div>
)

CommentItem.propTypes = {
  comment : React.PropTypes.object,
  className: React.PropTypes.string
}

export default CommentItem
