import "./MessageForm.scss";
// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MessageForm = () => {
  return (
    <Form id="messageForm">
      <Form.Group>
        <Form.Control type="text" placeholder="Message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
};

export default MessageForm;