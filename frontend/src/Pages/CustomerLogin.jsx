// /company/login
//state
import React, { useState, useEffect } from "react";
//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//file
import { loginCusThunk, FacebookLoginThunk } from "../redux/customer_authSlice";
//react-router-dom
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
//facebook
import FacebookLogin from "react-facebook-login";

export default function CustomerLogin() {
    const [credential, setCredential] = useState({
        email: "",
        password: "",
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
    };

    const responseFacebook = (userInfo) => {
        console.log("facebook response userInfo")
        console.log("facebook response", userInfo);
        dispatch(FacebookLoginThunk(userInfo));
    };

    return (
        <div>
            {/* login nav bar */}
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto flex-grow-1 justify-content-evenly">
                    <Link to="/customer/signup" style={{ color: 'black', textDecoration: "none" }}>SignUp</Link>
                    <Link to="/customer/login" style={{ color: 'black', textDecoration: "none" }}>Login</Link>
                </Nav>
            </Navbar>
            <h1 className='text-center'>Login</h1>



            <div className='row d-flex justify-content-center'>
                {/* Login info box */}
                <Card className="text-center" style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <div> <p>Email: </p>
                            <input
                                type="text"
                                placeholder="email"
                                name="email"
                                onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div> <p>Passward: </p>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                onChange={handleChange}
                            />
                        </div>
                        <br />
                        <Button onClick={() =>
                            dispatch(loginCusThunk(credential)).then(() => navigate("/customer/cart"))
                        } variant="dark">Login</Button>

                        <FacebookLogin
                            appId={process.env.REACT_APP_FACEBOOK_ID}
                            autoLoad={false}
                            fields="name,email"
                            callback={responseFacebook}
                        // cssClass="my-facebook-button-class"
                        />

                    </Card.Body>
                </Card>

                {/* Register box */}
                <Card className='text-center' style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>New to Bripto?</Card.Title>
                        <Card.Text>Create an account now</Card.Text>
                        <br />

                        <Link to="/customer/signup">
                            <Button variant="dark">Register</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}