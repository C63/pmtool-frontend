import React from 'react'
import UserItem from '../../User/UserItem/UserItem'
import moment from 'moment'

const CommentItem = ({ comment, className }) => {
  const user = JSON.parse(localStorage.getItem('userInfo'))

  return (
    <div className={className}>
      <UserItem user={user} displayDirection='vertical' />
      <time>{ moment(comment.get('create_at')).format('HH.MM MMM DD YYYY') }</time>
      <p className={className + '__content'}>{comment.get('content')}</p>
    </div>
  )
}

CommentItem.propTypes = {
  comment : React.PropTypes.object,
  className: React.PropTypes.string
}

export default CommentItem
