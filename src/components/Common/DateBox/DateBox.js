import React from 'react'
import moment from 'moment'

export const DateBox = ({ date, className }) =>
date ? (
  <div className={className}>
    <i className='material-icons'>date_range</i>
    <time>{ moment(date).format('DD MMM') }</time>
  </div>
) : null

DateBox.propTypes = {
  date : React.PropTypes.string,
  className: React.PropTypes.string
}

export default DateBox
