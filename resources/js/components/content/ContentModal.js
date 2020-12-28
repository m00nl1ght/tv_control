import React from 'react';
import Modal from 'react-bootstrap/Modal';

import ContentForm from './ContentForm';

export default function ContentModal(props) {
  return (
    <>
      <Modal 
        show={props.show} 
        onHide={props.handleClose} 
        animation={true}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Добавить контент</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <ContentForm 
              contentAdd = {props.contentAdd}
              onHide={props.handleClose}
            />
        </Modal.Body>
      </Modal>
    </>
  );
}
