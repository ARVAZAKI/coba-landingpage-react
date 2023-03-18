import {Container,Navbar} from 'react-bootstrap'
function Footer(){
    return (
        <Navbar bg='dark' variant = 'dark'>
          <Container>
            <Navbar.Brand href="#home">SMKN 1 SURABAYA</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <h3>Arva Zaki Fanadzan</h3>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default Footer 