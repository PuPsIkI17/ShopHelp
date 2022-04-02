import React from "react";
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

import "../styles/Main.css"

const MyNavbar = ({type}) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>{type}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/barcode">Barcode Scanner</Nav.Link>
                    <NavDropdown title="Shopes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/tech">Tech</NavDropdown.Item>
                        <NavDropdown.Item href="/food">Food</NavDropdown.Item>
                        <NavDropdown.Item href="/pharmacy">Pharmacy</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/all">All</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;