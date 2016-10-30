import React from 'react'
import { Button } from 'react-bootstrap'
import UserItem from '../../User/UserItem/UserItem'

export const CommentBox = ({ user, className }) => (
  <div className={className}>
    <input type='text' placeholder='Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Fuga nostrum obcaecati doloribus labore maiores rerum adipisci'
    />
    <div className={className + '__bottom'}>
      <UserItem user={user} boxOnlyMode />
      <div className={className + '__bottom__buttons'}>
        <Button>Add</Button>
        <Button>Cancel</Button>
      </div>
    </div>
  </div>
)

CommentBox.propTypes = {
  user : React.PropTypes.object,
  className: React.PropTypes.string
}

export default CommentBox
