import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Modal(props) {
  function confirmHandler() {
    props.onConfirm();
  }
  function cancelHandler() {
    props.onCancel();
  }
  return (
    <div className='custom-modal'>
      <Card>
        <Card.Body>
          <Card.Title>Are you sure?</Card.Title>
          <Card.Text>
            Are you sure you want to delete the todo?
          </Card.Text>
          <Button variant='danger' onClick={confirmHandler}>Confirm</Button>
          <Button variant='primary' onClick={cancelHandler}>Cancel</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Modal;