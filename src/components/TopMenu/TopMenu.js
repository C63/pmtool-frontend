import React from 'react'
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap'
export default class TopMenu extends React.Component
{
  render () {
    return (
      <div className='top-menu'>
        <div className='top-menu__search'>
          <FormGroup>
            <InputGroup>
              <FormControl type='text' placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' />
            </InputGroup>
          </FormGroup>
        </div>
      </div>
    )
  }
}
