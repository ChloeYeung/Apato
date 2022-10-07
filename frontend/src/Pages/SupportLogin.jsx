// /company/login
import React, { useState, useEffect } from "react";

//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//file
import { loginSupThunk } from "../redux/support_authSlice";

//react-router-dom
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";

export default function SupportLogin() {
    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });

    const isAuthenticatedSup = useSelector((state) => state.authSup.isAuthenticatedSup);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        isAuthenticatedSup && navigate("/");
    }, [isAuthenticatedSup, navigate]);

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
                <Navbar.Brand as={Link} to="/">Apato</Navbar.Brand>
                <Nav className="me-auto flex-grow-1 justify-content-evenly">
                    <Link to="/support/login" style={{ color: 'black', textDecoration: "none" }}>Login</Link>
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
                            dispatch(loginSupThunk(credential)).then(() => navigate("/support/chat"))
                        } variant="dark">Login</Button>

                    </Card.Body>
                </Card>

               
            </div>
        </div>
    )
}
