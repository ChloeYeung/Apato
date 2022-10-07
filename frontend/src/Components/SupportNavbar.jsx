import React, { useEffect } from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//react-router-dom
import { Link, NavLink } from "react-router-dom";
//react-icon
import { RiLoginCircleFill } from "react-icons/ri";
//redux
import { useDispatch, useSelector } from "react-redux";
//file
import { logoutSupThunk } from "../redux/support_authSlice";

export default function CompanyNavbar(props) {
  const dispatch = useDispatch();
  return (
    <>
      {/*  nav bar */}
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Apato
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* content */}
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/support/chat"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Chat
                </Link>
              </Nav.Link>
            </Nav>

            <Nav>
              {/* logout */}
              <Nav.Link>
                <button
                  className="logoutBtn"
                  onClick={() => dispatch(logoutSupThunk())}
                >
                  Logout <RiLoginCircleFill />
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
