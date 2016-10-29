import React from 'react'
import CommentItem from '../CommentItem/CommentItem'

export const CommentList = ({ comments, className }) => (
  <div className={className}>
    {comments.map((comment) => {
      <CommentItem comment={comment} />
    })}
  </div>
)

CommentList.propTypes = {
  comments : React.PropTypes.array,
  className: React.PropTypes.string
}

export default CommentList
