import React from 'react'
import Immutable from 'immutable'

import CommentItem from '../CommentItem/CommentItem'

export const CommentList = ({ comments, className }) => comments ? (
  <div className={className}>
    { comments.map((comment, index) => {
      return <CommentItem comment={comment} key={index} className='comment' />
    }) }
  </div>
) : null

CommentList.propTypes = {
  comments : React.PropTypes.instanceOf(Immutable.List),
  className: React.PropTypes.string
}

export default CommentList
