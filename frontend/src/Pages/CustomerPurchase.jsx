// /customer/cart/purchase

import React from 'react'
//file
import CustomerNavbar from '../Components/CustomerNavbar';
import { showOrderTotalThunk } from "../redux/customer_cartSlice";
//bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

//react icon
import { TiTick } from "react-icons/ti";
//redux
import { useDispatch, useSelector } from "react-redux";
//react-router-dom
import { Link } from "react-router-dom";


export default function CustomerPurchase() {
  const showordertotal = useSelector((state) => state.cartReducer.showordertotal);
  return (
    <>
      {/* navbar */}
      <CustomerNavbar />

      <div className="text-center">
        <h1>Payment</h1>
        <p>Click the link or scan the QR code to process payment</p>
      </div>


      {/* payment code */}
      <div className='container'>
        <div className='d-flex text-center justify-content-center align-items-center'>

          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title> <u> Payment Link </u>  </Card.Title>
              <Card.Text>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="account number"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    <Link to="/customer/payment_status" className='rmLinkStyle'>  <TiTick /></Link>
                  </Button>
                </InputGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />


      {/* summary card */}
      <div className='container'>
        <div className='d-flex   text-center justify-content-center align-items-center'>

          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title> Summary  </Card.Title>
              <hr />
              <Card.Text>
                Order Total: $ {showordertotal && showordertotal}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />

      {/* reminder */}
      <Alert variant="warning" className="fixed-bottom text-center">
        Please do not interrupt the network during the payment process until the payment is success
      </Alert>
    </>
  )
}
