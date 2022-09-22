// /customer/cart
//file
import CustomerNavbar from '../Components/CustomerNavbar';
import logo from '../logo.svg';

//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

//react icon
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrFormAdd } from "react-icons/gr";
import { TbMinus } from "react-icons/tb";

import React from 'react';

export default function CustomerCart() {
  return (
    <div>
      <>
        {/* navbar */}
        <CustomerNavbar />

        {/* product cart */}
        <Card >
          <Card.Body>
            <div className='row'>

              {/* company title */}
              <h3 style={{ marginLeft: "30px" }} className="text-secondary">CUPCAKE COMPANY</h3>

              {/* product image */}
              <div className='col'>
                <img src={logo} style={{ height: "150px", weight: "150px" }} className="map img-resonsive" />
              </div>

              {/* product info */}
              <div className='col' style={{ padding: "15px" }}>

                {/* container - base info */}
                <Card.Text>
                  <h4>Product Name</h4>
                  <p>$ </p>
                </Card.Text>


                {/* container - button group */}
                <div className='row'>
                  <div className='col'>
                    <InputGroup>
                      <Button variant="outline-secondary" size="sm">+</Button>
                      <Form.Control
                        value="3"
                        style={{ maxWidth: "50px" }}
                        className="text-center"
                      />
                      <Button variant="outline-secondary" size="sm">-</Button>
                    </InputGroup>
                  </div>

                  <div className='col'>
                    <Button variant='outline-secondary'><RiDeleteBin6Line /></Button>
                  </div>
                </div>

                {/* container - stock info */}
                <div>
                  <Card.Text className='text-secondary'>
                    remaining stock:
                  </Card.Text>
                </div>

              </div>

            </div>

          </Card.Body>
        </Card>



        {/* bottom total */}
        <div className="fixed-bottom">

          <Card >

            <div style={{ padding: "10px" }}>

              <div style={{ float: "left" }}>
                <p>
                  Order Total $
                </p>
              </div>

              <div style={{ float: "right" }}>
                <Button variant='outline-secondary'>Purchase</Button>
              </div>

            </div>

          </Card>

        </div>









      </>
    </div>
  )
}
