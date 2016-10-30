import React from 'react'
import UserItem from '../User/UserItem/UserItem'
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap'
export default class TopMenu extends React.Component
{
  render () {
    const user = {
      full_name: 'Phuc Doan'
    }
    return (
      <div className='top-menu'>
        <div className='top-menu__search'>
          <FormGroup>
            <InputGroup>
              <FormControl type='text' placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' />
            </InputGroup>
          </FormGroup>
        </div>
        <div className='top-menu__dropdown'>
          <i className='material-icons'>notifications</i>
          <UserItem user={user} boxOnlyMode />
        </div>
      </div>
    )
  }
}
