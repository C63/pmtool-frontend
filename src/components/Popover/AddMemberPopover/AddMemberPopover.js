import React from 'react'
import { Popover, Button } from 'react-bootstrap'
import CorePopover from '../CorePopover'
import UserItem from '../../User/UserItem/UserItem'
export default class AddMemberPopover extends React.Component
{
  renderPopOver () {
    const { users } = this.props
    return (
      <Popover id='add-member-popover' className='add-member-popover'>
        <h4>Members</h4>
        <input type='text' placeholder='Search members or teams' />
        { users.map((user, index) => {
          return <UserItem user={user} key={index} displayDirection='horizontal' />
        }) }
      </Popover>
    )
  }
  render () {
    const popOverContent = this.renderPopOver()
    return (
      <CorePopover trigger='click' placement='right' overlay={popOverContent}>
        <Button className='add-member-popover__btn'>+</Button>
      </CorePopover>
    )
  }
}

AddMemberPopover.propTypes = {
  users: React.PropTypes.array
}
