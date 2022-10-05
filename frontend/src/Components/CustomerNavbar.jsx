import React, { useEffect } from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//react-router-dom
import { Link, NavLink } from "react-router-dom";
//react-icon
import { ImExit } from "react-icons/im";
//redux
import { useDispatch, useSelector } from "react-redux";
//file
import { logoutCusThunk } from "../redux/customer_authSlice";

export default function CustomerNavbar(props) {
  const dispatch = useDispatch();

  let handleSearchChange = function (e) {
    console.log(e.target.value);
    props.onChangeValue(e.target.value);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            ApaTo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <NavDropdown
                title="Product / Service"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/customer/show_product"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Product
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/customer/show_service"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Service
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/customer/order_history"
                style={{ color: "black", textDecoration: "none" }}
              >
                Order History
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/customer/cart"
                style={{ color: "black", textDecoration: "none" }}
              >
                Shopping Cart
              </Nav.Link>
            </Nav>
            <Nav>
              {/* search bar */}
              {props.showSearch == true ? (
                <>
                  <Form className="d-flex">
                    <Form.Control
                      className="searchBarNavSer"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={handleSearchChange}
                    />
                    {/* <Button variant="outline-success">Search</Button> */}
                  </Form>
                </>
              ) : (
                <></>
              )}

              {/* company image */}
              <Nav.Link disabled>
                <img className="NavBarIcon" src={props.customerImage} />
              </Nav.Link>

              {/* company name */}
              <Nav.Link disabled>Welcome Back! {props.customerName}</Nav.Link>

              {/* logout btn */}
              <Nav.Link>
                <button
                  className="logoutBtn"
                  onClick={() => dispatch(logoutCusThunk())}
                >
                  Logout <ImExit color="blue" />
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

