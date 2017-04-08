import React from 'react'

export default class Tag extends React.Component {
  render () {
    const { tag } = this.props
    return (
      <div className='tag'>
        <span>{tag}</span>
      </div>
    )
  }
}
Tag.propTypes = {
  tag: React.PropTypes.string,
  isLastTag: React.PropTypes.bool
}
