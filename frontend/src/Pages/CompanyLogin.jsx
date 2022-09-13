// /company/login
//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//file
import CompanyNavbar from '../Components/CompanyNavbar';

//react-router-dom
import { Link, NavLink } from "react-router-dom";



export default function CompanyLogin() {
    return (
        <div>
            {/* login nav bar */}
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/company/signup">SignUp</Link>
                    <Link to="/company/Login">Login</Link>
                </Nav>
            </Navbar>
            <h1 className='text-center'>Login</h1>

            <div className='row d-flex justify-content-center'>
                {/* Login info box */}
                <Card className="text-center" style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <div> <p>Email: </p>  <input type="text" /></div>
                        <br />
                        <div> <p>Passward: </p>  <input type="text" /></div>
                        <br />
                        <Button variant="primary">Login</Button>

                    </Card.Body>
                </Card>

                {/* Register box */}
                <Card className='text-center' style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>New to Bripto?</Card.Title>
                        <Card.Text>Create an account now</Card.Text>
                        <br />
                        <Button variant="primary">Register</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
