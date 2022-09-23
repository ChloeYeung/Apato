// /customer/cart
import React from 'react';
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
//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { showCartThunk, addCartUnitThunk } from "../redux/customer_cartSlice";

export default function CustomerCart() {
  const showcart = useSelector((state) => state.cartReducer.showcart);
  console.log(showcart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCartThunk());
  }, []);

  let handleAddCartUnit = function (element2) {
    console.log(element2);
    let cart_id = element2.id;
    let product_id = element2.product_id;
    let add = { cart_id: cart_id, product_id, product_id }
    dispatch(addCartUnitThunk(add));
  }

  return (
    <div>
      <>
        {/* navbar */}
        <CustomerNavbar />

        {/* product cart */}



        {
          showcart && showcart
            .map((element, index) => (

              <>

              </>

            ))
        }
        {
          showcart && showcart.map((element1, index) => (
            <>
              <Card key={index + "showcart"}>
                <Card.Body>
                  {/* company title */}
                  <h3 style={{ marginLeft: "30px" }} className="text-secondary">{element1[0].name}</h3>

                  {
                    element1.map((element2) => (

                      <>
                        <div className='row'>


                          {/* product image */}
                          <div className='col'>
                            <img src={`data:image/png;base64 ,${element2.image_data}`} style={{ height: "150px", weight: "150px" }} className="map img-resonsive" />
                          </div>

                          {/* product info */}
                          <div className='col' style={{ padding: "15px" }}>

                            {/* container - base info */}
                            <Card.Text>
                              {/* <p>{element2.image_data}</p> */}
                              <h4>{element2.product_name}</h4>
                              <p>$ {element2.price}</p>
                            </Card.Text>


                            {/* container - button group */}
                            <div className='row'>
                              <div className='col'>
                                <InputGroup>
                                  <Button variant="outline-secondary" size="sm" onClick={() => handleAddCartUnit(element2)}>+</Button>
                                  <Form.Control
                                    value={element2.unit}
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
                                remaining stock:{element2.stock}
                              </Card.Text>
                            </div>

                          </div>

                        </div>



                      </>
                    ))
                  }


                </Card.Body>
              </Card>
            </>
          )
          )



        }


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
