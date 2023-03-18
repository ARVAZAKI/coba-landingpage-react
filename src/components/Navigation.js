import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
function Navigation(){
    return (
        <Navbar bg="dark" variant = "dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">SMKN 1 SURABAYA</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
               
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
    
export default Navigation