// /company/login
import React, { useState, useEffect } from "react";

//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//file
import { loginComThunk } from "../redux/company_authSlice";

//react-router-dom
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";

export default function CompanyLogin() {
    const [credential, setCredential] = useState({
        email: "",
        password: "",
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
    };

    return (
        <div>
            {/* login nav bar */}
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto flex-grow-1 justify-content-evenly">
                    <Link to="/company/signup" style={{ color: 'black', textDecoration: "none" }}>SignUp</Link>
                    <Link to="/company/login" style={{ color: 'black', textDecoration: "none" }}>Login</Link>
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
                            dispatch(loginComThunk(credential)).then(() => navigate("/company/product_management"))
                        } variant="dark">Login</Button>

                    </Card.Body>
                </Card>

                {/* Register box */}
                <Card className='text-center' style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>New to Bripto?</Card.Title>
                        <Card.Text>Create an account now</Card.Text>
                        <br />

                        <Link to="/company/signup">
                            <Button variant="dark">Register</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
