// customer/signup
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
import { signupCusThunk } from "../redux/customer_authSlice";


export default function CustomerSignUp() {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
    name: "",
    phone_no: "",
    address: "",
    cypto_no: "",
    image: "",
  });

  const isAuthenticatedCus = useSelector((state) => state.authCus.isAuthenticatedCus);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticatedCus && navigate("/");
  }, [isAuthenticatedCus, navigate]);

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
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="me-auto flex-grow-1 justify-content-evenly">
          <Link to="/customer/signup" style={{ color: 'black', textDecoration: "none" }}>SignUp</Link>
          <Link to="/customer/login" style={{ color: 'black', textDecoration: "none" }}>Login</Link>
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
                placeholder="12345678"
                name="phone_no"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className='row'>
              <label >Address</label>
              <input
                type="text"
                placeholder="address"
                name="address"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className='row'>
              <label >Cypto payment code </label>
              <input
                type="text"
                placeholder="cypto"
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
                placeholder="********"
                name="password"
                onChange={handleChange}
              />
            </div>
            <br />

            <div className='row'>
              <label >Image: </label>
              <input type="file" accept='image/png, image/gif, image/jpeg' id="signUpFormImageCus" name="image" />
            </div>

            <br />
            <Button onClick={() =>
              dispatch(signupCusThunk(credential)).then(() => navigate("/customer/login"))
            } variant="dark"><TiTickOutline /></Button>

          </Card.Body>
        </Card>
      </div>
    </div>
  )
}