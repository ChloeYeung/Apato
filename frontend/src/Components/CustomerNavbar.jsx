import React from 'react';
//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//react-router-dom
import { Link, NavLink } from "react-router-dom";


export default function CustomerNavbar() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/">SeachBar</Link>
                        <Link to="/customer/order_history">Order History</Link>
                        <Link href="/customer/cart">Shopping Cart</Link>
                        <Link href="/customer/login">Logout</Link>
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