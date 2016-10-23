import React from 'react'
import { Modal, Button } from 'react-bootstrap'
export default class CardModal extends React.Component
{
  render () {
    const { showModal, toggleModal } = this.props
    return (
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

          <h4>Popover in a modal</h4>
          <hr />

          <h4>Overflowing text to show scroll behavior</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

CardModal.propTypes = {
  showModal : React.PropTypes.bool,
  toggleModal : React.PropTypes.func
}
