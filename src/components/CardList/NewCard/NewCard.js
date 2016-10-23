import React from 'react'

export default class NewCard extends React.Component
{
  render () {
    return (
      <div className='new-card'>
        <i className='material-icons'>add_circle</i>
        <span>Add new task</span>
      </div>
    )
  }
}
