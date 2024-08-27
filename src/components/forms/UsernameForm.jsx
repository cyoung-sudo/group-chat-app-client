import "./UsernameForm.scss";
// React
import { useState } from "react";
// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UsernameForm = ({ setUsername }) => {
  const [name, setName] = useState("");

  const submitName = e => {
    e.preventDefault();
    setUsername(name);
  }

  return (      
    <Form id="usernameForm" onSubmit={submitName}>
      <Form.Group>
        <Form.Control
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Username" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enter
      </Button>
    </Form>
  );
};

export default UsernameForm;