import React from 'react'
import Immutable from 'immutable'

export const MessageBox = ({ messages, className }) => {
  if (!messages) {
    messages = Immutable.List()
  }
  return (
    <div className={className}>
      <i className='material-icons'>question_answer</i>
      <span>{ messages.size }</span>
    </div>
  )
}

MessageBox.propTypes = {
  messages : React.PropTypes.instanceOf(Immutable.List),
  className: React.PropTypes.string
}

export default MessageBox
