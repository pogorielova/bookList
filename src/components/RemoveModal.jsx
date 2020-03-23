import React from 'react';
import { Button } from 'react-bootstrap';

function RemoveModal(props) {
  return (
    <div className='modal1'>
      <div className='modal-text'>Are you sure you want to delete the book?</div>
      <div>
      <Button variant='danger' onClick={props.handleRemoveBook}>Yes</Button>
      <Button variant='secondary' onClick={props.handleRemoveModal}>No</Button>
      </div>
    </div>
  )
}

export default RemoveModal;
