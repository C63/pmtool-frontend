import React from 'react'
import CommentItem from '../CommentItem/CommentItem'

export const CommentList = ({ comments, className }) => comments ? (
  <div className={className}>
    { comments.slice(0, 5).map((comment) => {
      return <CommentItem comment={comment} key={comment.id} className='comment' />
    }) }
  </div>
) : null

CommentList.propTypes = {
  comments : React.PropTypes.array,
  className: React.PropTypes.string
}

export default CommentList
