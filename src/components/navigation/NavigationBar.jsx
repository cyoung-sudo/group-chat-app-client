import "./NavigationBar.scss";
// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = ({ username }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Group Chat</Navbar.Brand>
        
        {username &&
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav id="nav-info" className="justify-content-end">
                <div>Username: {username}</div>
                <div>Group: ...</div>
              </Nav>
            </Navbar.Collapse>
          </>
        }
      </Container>
    </Navbar>
  );
}

export default NavigationBar;