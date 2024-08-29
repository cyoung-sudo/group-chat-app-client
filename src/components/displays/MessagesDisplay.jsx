import "./MessagesDisplay.scss";
// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

const MessagesDisplay = ({ messages }) =>{
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