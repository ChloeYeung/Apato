//customer/order_history

import React from 'react';
//file
import CustomerNavbar from '../Components/CustomerNavbar';
import logo from '../logo.svg';
//bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CustomerOrderHistory() {
  return (
    <div>
      {/* Navbar */}
      <CustomerNavbar />

      {/* Title */}
      <br />
      <h3 className='text-center'>Order History</h3>
      <br />

      {/* order card */}
      <div className='container'>
        <div className='d-flex text-center justify-content-center align-items-center'>

        <Card style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title> Order number #  </Card.Title>
            <Card.Text>
              Date
              Status
            </Card.Text>
            <hr />

            <div className='row'>

              <div className='col'><img src={logo} alt="" /></div>
              <div className='col'>
                <p>Name</p> 
                
                <p>Unit</p> <p>Price</p>
                </div>

            </div>
          </Card.Body>



        </Card>
        </div>
      </div>

    </div>
  )
}
