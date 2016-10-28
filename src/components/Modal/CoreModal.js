import React from 'react'
import { Modal } from 'react-bootstrap'
export default class CoreModal extends React.Component
{
  render () {
    const { isOpen, closeModal, children } = this.props
    return (
      <Modal show={isOpen} onHide={closeModal}>
        {children}
      </Modal>
    )
  }
}

CoreModal.propTypes = {
  isOpen : React.PropTypes.bool,
  closeModal : React.PropTypes.func,
  children: React.PropTypes.element
}
