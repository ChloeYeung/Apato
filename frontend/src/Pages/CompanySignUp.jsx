// company/signup
import React, { useState, useEffect } from "react";

//Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//react icon
import { TiTickOutline } from "react-icons/ti";

//react-router-dom
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";

//file
import { signupComThunk } from "../redux/company_authSlice";


export default function CompanySignUp() {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
    name: "",
    phone_no: "",
    cypto_no: "",
    image: "",
  });

  const isAuthenticatedCom = useSelector((state) => state.authCom.isAuthenticatedCom);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticatedCom && navigate("/");
  }, [isAuthenticatedCom, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredential((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    console.log(credential);
  };

  return (
    <div>

      {/* sign up navbar */}
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto flex-grow-1 justify-content-evenly">
          <Link to="/company/signup" style={{ color: 'black', textDecoration: "none" }}>SignUp</Link>
          <Link to="/company/login" style={{ color: 'black', textDecoration: "none" }}>Login</Link>
        </Nav>
      </Navbar>
      <h1 className='text-center'>SignUp</h1>

      {/* sign up card */}
      <div className='d-flex justify-content-center'>
        <Card style={{ width: '25rem' }} className="text-center">
          <Card.Body>
            <Card.Title>Please fill in below information</Card.Title>
            <div className='row'>
              <label>Email </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className='row'>
              <label >Phone no.</label>
              <input
                type="number"
                placeholder="phone number"
                name="phone_no"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className='row'>
              <label >Cypto payment code </label>
              <input
                type="text"
                placeholder="code"
                name="cypto_no"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className='row'>
              <label >Name </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className='row'>
              <label >Password </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <br />

            {/* <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Company image</Form.Label>
              <Form.Control type="file" />

            </Form.Group> */}
            <label >Image </label>
            <input
                type="image"
                name="image"
                onChange={handleChange}
              />

            {/* <div className='row'>
                        <label >Image: </label>
                        <input type="file" />
                    </div> */}
            <br />
            <Button onClick={() =>
              dispatch(signupComThunk(credential)).then(() => navigate("/company/login"))
            } variant="dark"><TiTickOutline /></Button>

          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
