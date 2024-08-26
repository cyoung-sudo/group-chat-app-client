import "./NavigationBar.scss";
// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Group Chat</Navbar.Brand>
        <Navbar.Text className="justify-content-end">
          Group: ...
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;