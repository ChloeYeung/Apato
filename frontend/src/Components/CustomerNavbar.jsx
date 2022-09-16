import React, { useEffect } from "react";
//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//react-router-dom
import { Link, NavLink } from "react-router-dom";
//react-icon
import { ImExit } from "react-icons/im";
//redux
import { useDispatch, useSelector } from "react-redux";
//file
import { logoutCusThunk } from "../redux/customer_authSlice";

export default function CustomerNavbar() {
    const dispatch = useDispatch();
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto flex-grow-1 justify-content-evenly">
                        {/* <Link to="/">SeachBar</Link> */}

                        <NavDropdown title="Product/Service" id="basic-nav-dropdown" >
                            <NavDropdown.Item ><Link to="/customer/show_product" style={{ color: 'black', textDecoration: "none" }}>Product</Link> </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/customer/show_service" style={{ color: 'black', textDecoration: "none" }}>Service</Link>
                            </NavDropdown.Item>

                        </NavDropdown>

                        {/* <Link to="/customer/show_product" style={{ color: 'black', textDecoration: "none", position: "relative", top: "8px" }}>Product</Link>
                        <Link to="/customer/show_service" style={{ color: 'black', textDecoration: "none" , position: "relative", top: "8px"}}>Service</Link> */}
                        <Link to="/customer/order_history" style={{ color: 'black', textDecoration: "none", position: "relative", top: "8px" }}>Order History</Link>
                        <Link to="/customer/cart" style={{ color: 'black', textDecoration: "none", position: "relative", top: "8px" }}>Shopping Cart</Link>


                        <button className="logoutBtn"
                            onClick={() => dispatch(logoutCusThunk())}>
                            Logout <ImExit color='blue' />
                        </button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}


// <Link style={{ margin: "5px" }} to="/">
//           Home
//         </Link>
//         <Link style={{ margin: "5px" }} to="/about">
//           About
//         </Link>