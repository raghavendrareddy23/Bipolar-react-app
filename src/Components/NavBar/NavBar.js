import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Bipolar Factory</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="/card">Camera</Nav.Link>
            <Nav.Link href="/chart">Camera Description</Nav.Link>
            <Nav.Link href="/table">Table</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <h1>Welcome To the Security Management</h1>
    </Navbar>
  );
}

export default NavBar;
