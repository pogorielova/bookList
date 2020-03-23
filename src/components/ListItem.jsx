import React from 'react';
import { ListGroup } from 'react-bootstrap';

function ListItem(props){

    console.log(props);
    return(
        <div className='listItem'>
            <ListGroup onClick={() => props.handleRemoveModal()}>
                <ListGroup.Item>{props.book.bookName}</ListGroup.Item>
                <ListGroup.Item>{props.book.year}</ListGroup.Item>
                <ListGroup.Item>{props.book.page}</ListGroup.Item>
                <ListGroup.Item>{props.book.author}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}



export default ListItem;
