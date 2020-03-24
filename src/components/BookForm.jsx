import React from 'react';
import {Form, Button} from 'react-bootstrap';

function BookForm(props) {
  return (
    <Form>
            <Form.Group>
            <Form.Label>Book Name:
                <Form.Control type="text" onChange={props.handleInput}  value={props.myBook.bookName} name='bookName'/></Form.Label>
                </Form.Group>
                <Form.Group>
            <Form.Label>Year:
                <Form.Control type="number" onChange={props.handleInput} value={props.myBook.year} name='year'/></Form.Label>
                </Form.Group>
                <Form.Group>
            <Form.Label>Pages:
                <Form.Control type="number" onChange={props.handleInput} value={props.myBook.page} name="page"/></Form.Label>
                </Form.Group>
                <Form.Group>
            <Form.Label>Author:
                <Form.Control type="text" onChange={props.handleInput} value={props.myBook.author} name="author"/></Form.Label>
                </Form.Group>
            <Button variant="success" type="button" onClick={props.handleAddModal}>Add Book</Button>
    </Form>
  )
}

export default BookForm;
