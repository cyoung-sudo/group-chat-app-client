import "./GroupForm.scss";
// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const GroupForm = () => {
  return (
    <Form id="groupForm">
      <Form.Group>
        <Form.Control type="text" placeholder="Group" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Join
      </Button>
    </Form>
  );
};

export default GroupForm;