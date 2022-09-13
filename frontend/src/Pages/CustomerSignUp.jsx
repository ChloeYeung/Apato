// customer/signup

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




export default function CustomerSignUp() {
  return (
    <div>

      {/* sign up navbar */}
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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
              <label>Name </label>
              <input type="text" />
            </div>
            <br />
            <div className='row'>
              <label >Phone no.</label>
              <input type="text" />
            </div>
            <br />
            <div className='row'>
              <label >Address</label>
              <input type="text" />
            </div>
            <br />
            <div className='row'>
              <label >Cypto payment code </label>
              <input type="number" />
            </div>
            <br />
            <div className='row'>
              <label >Email </label>
              <input type="number" />
            </div>
            <br />
            <div className='row'>
              <label >Password </label>
              <input type="text" />
            </div>
            <br />

            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Personal image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            {/* <div className='row'>
                        <label >Image: </label>
                        <input type="file" />
                    </div> */}
            <br />
            <Button variant="dark"><TiTickOutline /></Button>

          </Card.Body>
        </Card>
      </div>
    </div>
  )
}