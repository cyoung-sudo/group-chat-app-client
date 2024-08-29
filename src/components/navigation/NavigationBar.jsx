import "./NavigationBar.scss";
// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// Icons
import { IoIosChatbubbles } from "react-icons/io";

const NavigationBar = ({ username, group }) => {
  return (
    <Navbar id="navbar" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><span><IoIosChatbubbles/></span>Group Chat</Navbar.Brand>
        
        {username &&
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <div>Username: {username}</div>
                <div>Group: {group}</div>
            </Navbar.Collapse>
          </>
        }
      </Container>
    </Navbar>
  );
}

export default NavigationBar;