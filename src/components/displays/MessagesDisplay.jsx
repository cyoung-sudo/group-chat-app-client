import "./MessagesDisplay.scss";
// React
import { useEffect, useRef } from "react";
// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

const MessagesDisplay = ({ messages }) =>{
  const listRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom on new messages
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  return (
    <ListGroup id="messagesDisplay" ref={listRef}>
      {messages.map((message, idx) => (
        <ListGroup.Item key={idx}>
          <div className="messagesDisplay-text">{message.username}: {message.text}</div>
          <div className="messagesDisplay-info">{new Date(message.createdAt).toLocaleString()}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MessagesDisplay;