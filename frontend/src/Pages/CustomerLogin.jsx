// /company/login
//state
import React, { useState, useEffect } from "react";
//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//file
import { loginCusThunk, FacebookLoginThunk, GoogleLoginThunk } from "../redux/customer_authSlice";
//react-router-dom
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
//facebook login
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
//decode
import jwt_decoded from "jwt-decode";
//react-icon
import { FaFacebookF } from "react-icons/fa";


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

    // Facebook Login
    const responseFacebook = (userInfo) => {
        dispatch(FacebookLoginThunk(userInfo)).then(() => navigate("/customer/cart"));
    };


    // Google Login
    function handleCallbackResponse(response) {
        let userObject = jwt_decoded(response.credential);
        dispatch(GoogleLoginThunk(userObject)).then(() => navigate("/customer/cart"));
    }

    const google = window.google;

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_ID,
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {
                theme: "outline",
                shape: "square",
                logo_alignment: "left",
                locale: "en_US",
                type: "icon",
            }
        )
    }, [])

    return (
        <div>
            {/* login nav bar */}
            <Navbar bg="light" variant="light">
                <Navbar.Brand as={Link} to="/">Apato</Navbar.Brand>
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

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <Button onClick={() =>
                                        dispatch(loginCusThunk(credential)).then(() => navigate("/customer/cart"))
                                    } variant="dark">Login</Button>
                                </div>

                                <div className="col">
                                    <FacebookLogin
                                        appId={process.env.REACT_APP_FACEBOOK_ID}
                                        autoLoad={false}
                                        fields="name,email"
                                        callback={responseFacebook}
                                        render={renderProps => (
                                            <Button onClick={renderProps.onClick} variant="outline-primary"><FaFacebookF /></Button>
                                        )} />
                                </div>

                                <div className="col">
                                    <div id="signInDiv"></div>
                                </div>
                            </div>
                        </div>


                    </Card.Body>
                </Card>

                {/* Register box */}
                <Card className='text-center' style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>New to Apato?</Card.Title>
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