import "./GroupForm.scss";
// React
import { useState } from "react";
// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const GroupForm = ({ submitGroup }) => {
  const [grp, setGrp] = useState("");

  const checkGroup = e => {
    e.preventDefault();
    // Check max length
    if(grp.length <= 30) {
      submitGroup(grp);
      // Reset input
      setGrp("");
    } else {
      console.log("Group name too long");
    }
  }

  return (
    <Form id="groupForm" onSubmit={checkGroup}>
      <Form.Group>
        <Form.Control 
          onChange={e => setGrp(e.target.value)}
          value={grp}
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