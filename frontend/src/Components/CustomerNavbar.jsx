import React from 'react';
//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//react-router-dom
import { Link, NavLink } from "react-router-dom";

//react-icon
import { RiLoginCircleFill } from "react-icons/ri";

export default function CustomerNavbar() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto flex-grow-1 justify-content-evenly">
                        {/* <Link to="/">SeachBar</Link> */}
                        <Link to="/customer/order_history" style={{ color: 'black', textDecoration: "none" }}>Order History</Link>
                        <Link to="/customer/cart" style={{ color: 'black', textDecoration: "none" }}>Shopping Cart</Link>
                        <Link to="/customer/login" style={{ color: 'black', textDecoration: "none" }}>Logout <RiLoginCircleFill color='blue' /></Link>
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