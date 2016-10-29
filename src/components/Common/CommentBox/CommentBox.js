import React from 'react'
// import Button from 'react-bootstrap'
import UserItem from '../../User/UserItem/UserItem'

export const CommentBox = ({ user, className }) => (
  <div className={className}>
    <input type='text' placeholder='Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Fuga nostrum obcaecati doloribus labore maiores rerum adipisci'
    />
    <UserItem user={user} />
  </div>
)

CommentBox.propTypes = {
  user : React.PropTypes.object,
  className: React.PropTypes.string
}

export default CommentBox
