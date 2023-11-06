import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg fixed-top navbar-scr navbar-scrolled bg-body-tertiary bg-dark  "
    >
      <Container>
        <Navbar.Brand href="home">
          <img
            className=" logoLunar d-block w-100 ms-auto"
            src="/images/LOGO ALB.png"
            alt="First slide"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <NavDropdown title="Galeries" id="basic-nav-dropdown">
              <Nav.Link href="Nunta">Nunta</Nav.Link>
              <Nav.Link href="LoveStories">Love Stories</Nav.Link>
              <Nav.Link href="Botez">Botez</Nav.Link>
            </NavDropdown>
            <Nav.Link href="Contact">Contact</Nav.Link>
            <Nav.Link href="Services">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
