import React from 'react'
import Immutable from 'immutable'
import { Popover, Button } from 'react-bootstrap'
import CorePopover from '../CorePopover'
import UserItem from '../../User/UserItem/UserItem'
import { searchUser } from '../../../store/api'
import { selectUser, clearUserList } from '../../../routes/ProjectDetail/modules'
import { connect } from 'react-redux'

class AddMemberPopover extends React.Component {
  constructor () {
    super()
    this.searchUser = this.searchUser.bind(this)
    this.selectedUser = this.selectedUser.bind(this)
  }
  componentWillMount () {
    this.props.clearUserList()
  }
  searchUser (e) {
    let input = e.target.value
    this.props.searchUser(input)
  }

  selectedUser (user) {
    this.props.addUserToList(user)
  }

  renderPopOver () {
    const { users } = this.props
    return (
      <Popover id='add-member-popover' className='add-member-popover'>
        <h4>Members</h4>
        <input type='text' placeholder='Search members or teams' onChange={this.searchUser} />
        { users && users.map((user, index) => {
          return <UserItem user={user} key={index} displayDirection='horizontal'
            onClick={() => this.selectedUser(user)} />
        }) }
        { !users &&
          <div className='no-user'>No user</div>
        }
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
  users: React.PropTypes.instanceOf(Immutable.List),
  searchUser: React.PropTypes.func,
  clearUserList: React.PropTypes.func,
  addUserToList: React.PropTypes.func
}

const mapStatetoProps = (state) => ({
  users: state.project.get('users')
})

const mapDispatchtoProps = (dispatch) => ({
  searchUser: (txt) => dispatch(searchUser(txt)),
  addUserToList: (user) => dispatch(selectUser(user)),
  clearUserList: () => dispatch(clearUserList())
})
export default connect(mapStatetoProps, mapDispatchtoProps)(AddMemberPopover)
