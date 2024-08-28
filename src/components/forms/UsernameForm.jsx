import "./UsernameForm.scss";
// React
import { useState } from "react";
// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UsernameForm = ({ submitUsername }) => {
  const [name, setName] = useState("");

  const checkName = e => {
    e.preventDefault();
    // Check max length
    if(name.length <= 20) {
      submitUsername(name);
    } else {
      console.log("Name too long");
    }
  }

  return (      
    <Form id="usernameForm" onSubmit={checkName}>
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