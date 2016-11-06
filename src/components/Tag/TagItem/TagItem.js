import React from 'react'

export default class Tag extends React.Component
{
  render () {
    const { tag, isLastTag } = this.props
    const isLast = isLastTag ? '' : ','
    return (
      <div className='tag'>
        <span>{tag.tag_content}{isLast}</span>
      </div>
    )
  }
}
Tag.propTypes = {
  tag: React.PropTypes.object,
  isLastTag: React.PropTypes.bool
}
