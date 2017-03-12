import React from 'react'
import './spinner.scss'

export const LoadingSpinner = ({ onShow = true }) => {
  return (
    <div className='loading-spinner__container'>
      <div className='dot' />
      <div className='dot' />
      <div className='dot' />
    </div>
  )
}

LoadingSpinner.propTypes = {
  onShow: React.PropTypes.bool
}
