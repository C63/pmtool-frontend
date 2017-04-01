import React from 'react'
import { OverlayTrigger } from 'react-bootstrap'
export default class CorePopover extends React.Component {
  render () {
    const { trigger, overlay, children, placement } = this.props
    return (
      <OverlayTrigger rootClose trigger={trigger} overlay={overlay} placement={placement}>
        {children}
      </OverlayTrigger>
    )
  }
}

CorePopover.propTypes = {
  trigger : React.PropTypes.string,
  placement : React.PropTypes.string,
  overlay: React.PropTypes.element,
  children: React.PropTypes.element
}
