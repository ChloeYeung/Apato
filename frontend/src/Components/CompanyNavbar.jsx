import React, { useEffect } from "react";
//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//react-router-dom
import { Link, NavLink } from "react-router-dom";
//react-icon
import { RiLoginCircleFill } from "react-icons/ri";
//redux
import { useDispatch, useSelector } from "react-redux";
//file
import { logoutComThunk } from "../redux/company_authSlice";


export default function CompanyNavbar(props) {
  const dispatch = useDispatch();
  return (
    <>
      {/*  nav bar */}
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>Bripto</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* content */}
            <Nav className="me-auto">
              <Nav.Link > <Link to="/company/sales_summary" style={{ color: 'black', textDecoration: "none" }}
              >Sales Summary</Link></Nav.Link>
              <Nav.Link> <Link to="/company/sales_history" style={{ color: 'black', textDecoration: "none" }}
              >Sales History</Link></Nav.Link>
              <Nav.Link> <Link to="/company/product_management" style={{ color: 'black', textDecoration: "none" }}
              >Product Management</Link></Nav.Link>
            </Nav>

            <Nav>
              {/* company image */}
              <Nav.Link disabled>
                <img className="NavBarIcon" src={props.companyImage} />
              </Nav.Link>

              {/* company name */}
              <Nav.Link disabled>
                Welcome Back! {props.companyName}
              </Nav.Link>

              {/* logout */}
              <Nav.Link>
                <button className="logoutBtn"
                  onClick={() => dispatch(logoutComThunk())}>
                  Logout <RiLoginCircleFill color='blue' />
                </button>
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}