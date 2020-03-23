import React from 'react';
import { Button } from 'react-bootstrap';

function AddModal(props) {
  return (
    <div className='modal1'>
      <div className='modal-text'>Do you want to add book?</div>
      <div>
      <Button variant='success' onClick={props.handleAddBook}>Yes</Button>
      <Button variant='secondary' onClick={props.handleAddModal}>No</Button>
      </div>
    </div>
  )
}

export default AddModal;
