import React from 'react';
import { ListGroup } from 'react-bootstrap';

function ListItem(props){

    return(
        <div className='listItem'>
            <ListGroup onClick={() => props.selectBookToDelete(props.book)}>
                <ListGroup.Item>{props.book.title}</ListGroup.Item>
                <ListGroup.Item>{props.book.year}</ListGroup.Item>
                <ListGroup.Item>{props.book.pages}</ListGroup.Item>
                <ListGroup.Item>{props.book.author}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}



export default ListItem;
