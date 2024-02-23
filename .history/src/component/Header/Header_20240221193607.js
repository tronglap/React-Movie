import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-black">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://react-film-clone.vercel.app/img/logo.svg"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 m-auto p-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/" className="text-color">
                Home
              </NavLink>
              <NavLink to="/list-movie" className="text-color">
                Movie
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
