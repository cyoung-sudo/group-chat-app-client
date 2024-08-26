import "./MessagesDisplay.scss";
// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

const messages = [
  {
    username: "Bob",
    text: "fososovoijiofjriofjo",
    createdAt: "..."
  },
  {
    username: "Bob",
    text: "fososovoijiofjriofjo",
    createdAt: "..."
  },
  {
    username: "Bob",
    text: "fososovoijiofjriofjo",
    createdAt: "..."
  },
  {
    username: "Bob",
    text: "fososovoijiofjriofjo",
    createdAt: "..."
  },
  {
    username: "Bob",
    text: "fososovoijiofjriofjo",
    createdAt: "..."
  },
  {
    username: "Bob",
    text: "fososovoijiofjriofjo",
    createdAt: "..."
  }
];

const MessagesDisplay = () =>{
  return (
    <ListGroup id="messagesDisplay">
      {messages.map((message, idx) => (
        <ListGroup.Item key={idx}>
          <div>{message.username}</div>
          <div>{message.text}</div>
          <div>{message.createdAt}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MessagesDisplay;