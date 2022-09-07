import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navabar() {
  return (
    <Navbar className='navbar-header w-100' bg="" fixed='top' variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Vaani Techlabs </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white' href="#link">About</Nav.Link>
            <Nav.Link className='text-white' href="#link">Contac </Nav.Link>
            <Nav.Link className='text-white' href="#link">Blog</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navabar;