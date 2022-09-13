import React from 'react';
//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//react-router-dom
import { Link, NavLink } from "react-router-dom";
//react-icon
import { RiLoginCircleFill } from "react-icons/ri";



export default function CompanyNavbar() {
  const style = { color: "red" }
  return (
    <div>
      <div className="flex-grow-1  justify-content-evenly" >

        <Navbar bg="light" variant="light">

          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto flex-grow-1 justify-content-evenly" >
            <Link to="/customer/sales_history" style={{ color: 'black', textDecoration: "none" }}
            >Sales Summary</Link>
            <Link to="/customer/sales_history" style={{ color: 'black', textDecoration: "none" }}
            >Sales History</Link>
            <Link to="/company/product_management" style={{ color: 'black', textDecoration: "none" }}
            >Product Management</Link>
            <Link to="/company/login" style={{ color: 'black', textDecoration: "none" }}
            >Logout <RiLoginCircleFill color='blue' />
            </Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  )
}