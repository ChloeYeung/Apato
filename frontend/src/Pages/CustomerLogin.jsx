// /company/login
//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//file
import CustomerNavbar from '../Components/CompanyNavbar';

//react-router-dom
import { Link, NavLink } from "react-router-dom";


export default function CustomerLogin() {
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
                        <div> <p>Email: </p>  <input type="text" /></div>
                        <br />
                        <div> <p>Passward: </p>  <input type="text" /></div>
                        <br />
                        <Button variant="dark">Login</Button>

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