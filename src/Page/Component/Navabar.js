import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navabar() {
  return (
    <Navbar className='navbar-header w-100' bg="dark" fixed='top' variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Ak Jilani</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-white' > <Link className='link-home' to="/">Home</Link></Nav.Link>
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