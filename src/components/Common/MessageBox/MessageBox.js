import React from 'react'

export const MessageBox = ({ messages, className }) =>
messages ? (
  <div className={className}>
    <i className='material-icons'>question_answer</i>
    <span>{ messages.length }</span>
  </div>
) : null

MessageBox.propTypes = {
  messages : React.PropTypes.array,
  className: React.PropTypes.string
}

export default MessageBox
