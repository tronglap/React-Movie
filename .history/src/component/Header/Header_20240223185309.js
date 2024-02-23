import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [keySearch, setKeySearch] = useState();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      console.log(keySearch);
      navigate(`/search/${keySearch}`);
      setKeySearch("");
    }
  };

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
              className="me-auto my-2 my-lg-0 m-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/" className="text-color space">
                Home
              </NavLink>
              <NavLink to="/list-movie" className="text-color">
                Movie
              </NavLink>
            </Nav>
            <div className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search "
                aria-label="Search"
                value={keySearch}
                onChange={(e) => setKeySearch(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
