import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  // latest state value, the setter for the value
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() {
    console.log('clicked ' + props.text);
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.text}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant='primary' onClick={deleteHandler}>delete</Button>
      </Card.Body>
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
      { modalIsOpen && <Backdrop onClick={closeModalHandler} /> }
    </Card>
  );
}

export default Todo;
