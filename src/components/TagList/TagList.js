import React from 'react'
import TagItem from './TagItem/TagItem'
export default class TagList extends React.Component
{
  render () {
    const { tags, className } = this.props
    return (
      <div className={className}>
        { tags.map((tag, index) => {
          return (
            <TagItem key={index} tag={tag} />
          )
        })}
      </div>
    )
  }
}

TagList.propTypes = {
  tags: React.PropTypes.array,
  className: React.PropTypes.string
}
