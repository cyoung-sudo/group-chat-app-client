import './App.scss';
// Components
import Container from 'react-bootstrap/Container';
import NavigationBar from "./components/navigation/NavigationBar";
import MessagesDisplay from "./components/displays/MessagesDisplay";
import GroupForm from "./components/forms/GroupForm";
import MessageForm from "./components/forms/MessageForm";

function App() {
  return (
    <div id="app">
      <NavigationBar/>
      
      <Container id="app-content">
        <div id="messagesDisplay-wrapper">
          <MessagesDisplay/>
        </div>

        <div id="groupForm-wrapper">
          <GroupForm/>
        </div>

        <div id="messageForm-wrapper">
          <MessageForm/>
        </div>
      </Container>
    </div>
  )
};

export default App;