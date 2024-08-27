import "./GroupForm.scss";
// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const GroupForm = ({ setGroup, submitGroup }) => {
  return (
    <Form id="groupForm" onSubmit={submitGroup}>
      <Form.Group>
        <Form.Control 
          onChange={e => setGroup(e.target.value)}
          type="text"
          placeholder="Group" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Join
      </Button>
    </Form>
  );
};

export default GroupForm;