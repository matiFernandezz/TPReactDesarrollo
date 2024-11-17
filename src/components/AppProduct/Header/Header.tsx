import { Container, Navbar } from "react-bootstrap"

export const Header = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="m-2">
        <Container>
          <Navbar.Brand href="#home">Carga de productos</Navbar.Brand>
        </Container>
      </Navbar>
  )
}