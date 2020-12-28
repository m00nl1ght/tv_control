import React from 'react';
import Modal from 'react-bootstrap/Modal';

import ScreenForm from './ScreenForm';

export default function ScreenModal(props) {
  return (
    <>
      <Modal 
        show={props.show} 
        onHide={props.handleClose} 
        animation={true}
        centered
    >
        <Modal.Header closeButton>
          <Modal.Title>Добавить экран</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <ScreenForm 
              screenAdd = {props.screenAdd}
              onHide={props.handleClose}
            />
        </Modal.Body>
      </Modal>
    </>
  );
}
