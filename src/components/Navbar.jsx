import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

const NavbarCR = () => {
  return (
    <Navbar className="navbarCR" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#top">Carla Romano - UBA 2022</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#top">Inicio</Nav.Link>
            <Nav.Link href="#intro">Introduccion</Nav.Link>
            <Nav.Link href="#obj">Objetivos</Nav.Link>
            <NavDropdown title="Materiales y Métodos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#sust">
                Sustratos liofilizados
              </NavDropdown.Item>
              <NavDropdown.Item href="#mircoo">
                Mircoorganismos
              </NavDropdown.Item>
              <NavDropdown.Item href="#medios">
                Medios de cultivo
              </NavDropdown.Item>
              <NavDropdown.Item href="#diseno">
                Diseño experimental
              </NavDropdown.Item>
              <NavDropdown.Item href="#det">
                Determinacion analítica
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#resultados">Resultados</Nav.Link>
            <Nav.Link href="#conclusion">Conclusion</Nav.Link>
            <Nav.Link href="#referencias">Referencias</Nav.Link>
            <Nav.Link href="#agradecimientos">Agradecimientos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavbarCR
