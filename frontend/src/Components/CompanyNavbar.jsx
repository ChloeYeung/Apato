import React, { useEffect } from "react";
//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//react-router-dom
import { Link, NavLink } from "react-router-dom";
//react-icon
import { RiLoginCircleFill } from "react-icons/ri";
//redux
import { useDispatch, useSelector } from "react-redux";
//file
import { logoutComThunk } from "../redux/company_authSlice";


export default function CompanyNavbar() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex-grow-1  justify-content-evenly" >

        <Navbar bg="light" variant="light">

          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto flex-grow-1 justify-content-evenly" >
            <Link to="/company/sales_summary" style={{ color: 'black', textDecoration: "none" }}
            >Sales Summary</Link>
            <Link to="/company/sales_history" style={{ color: 'black', textDecoration: "none" }}
            >Sales History</Link>
            <Link to="/company/product_management" style={{ color: 'black', textDecoration: "none" }}
            >Product Management</Link>
            <button className="logoutBtn"
              onClick={() => dispatch(logoutComThunk())}>
              Logout <RiLoginCircleFill color='blue' />
            </button>
          </Nav>
        </Navbar>
      </div>
    </div>
  )
}