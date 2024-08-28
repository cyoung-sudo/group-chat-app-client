import './App.scss';
import axios from 'axios';
// React
import { useState } from "react";
// Sockets
import { io } from "socket.io-client";
// Components
import Container from 'react-bootstrap/Container';
import NavigationBar from "./components/navigation/NavigationBar";
import UsernameForm from "./components/forms/UsernameForm";
import MessagesDisplay from "./components/displays/MessagesDisplay";
import GroupForm from "./components/forms/GroupForm";
import MessageForm from "./components/forms/MessageForm";

const socket = io("http://localhost:5050/");

function App() {
  const [username, setUsername] = useState(null);
  const [group, setGroup] = useState("");

  const submitUsername = name => {
    axios.post("http://localhost:5050/api/user", {
      username: name
    })
      .then(res => {
        if(res.data.success) {
          setUsername(name);
        }
      })
      .catch(err => console.log(err));
  }

  const submitGroup = grp => {
    setGroup(grp);
  }

  return (
    <div id="app">
      <NavigationBar 
        username={username}
        group={group}/>
      
      <Container id="app-content">
        {!username &&
          <div id="usernameForm-wrapper">
            <div id="usernameForm-header">
              <h1>Messaging Made Easy</h1>
              <h4>Pick a username</h4>
              <h4>Join a group</h4>
              <h4>Start chatting</h4>
            </div>
            <UsernameForm submitUsername={submitUsername}/>
          </div>
        }

        {username && 
          <>
            <div id="messagesDisplay-wrapper">
              <MessagesDisplay/>
            </div>

            <div id="groupForm-wrapper">
              <GroupForm submitGroup={submitGroup}/>
            </div>

            <div id="messageForm-wrapper">
              <MessageForm/>
            </div>
          </>
        }
      </Container>     
    </div>
  )
};

export default App;