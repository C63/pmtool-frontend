import React from 'react'

export default class Tag extends React.Component {
  render () {
    const { tag } = this.props
    return (
      <div className='tag'>
        <span>{tag.tag_content}</span>
      </div>
    )
  }
}
Tag.propTypes = {
  tag: React.PropTypes.object,
  isLastTag: React.PropTypes.bool
}
