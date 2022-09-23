// /customer/cart
import React from 'react';
//file
import CustomerNavbar from '../Components/CustomerNavbar';
import logo from '../logo.svg';
import cartEmpty from '../images/cartEmpty2.png';
//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
//react icon
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrConsole, GrFormAdd } from "react-icons/gr";
import { TbMinus } from "react-icons/tb";
import { AiOutlineConsoleSql, AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";

//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { showCartThunk, addCartUnitThunk, minusCartUnitThunk, deleteCartThunk, showOrderTotalThunk } from "../redux/customer_cartSlice";

export default function CustomerCart() {
  const showcart = useSelector((state) => state.cartReducer.showcart);
  const showmessagechart = useSelector((state) => state.cartReducer.showmessagecart);
  const showordertotal = useSelector((state) => state.cartReducer.showordertotal);
  console.log(showcart);
  console.log(showmessagechart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCartThunk());
    dispatch(showOrderTotalThunk());
  }, []);

  // alert box
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  setTimeout(() => {
    setIsAlertVisible(false);
  }, 3000);

  let handleAddCartUnit = function (element2) {
    console.log(element2);
    let cart_id = element2.id;
    let product_id = element2.product_id;
    let add = { cart_id: cart_id, product_id, product_id }
    dispatch(addCartUnitThunk(add));
    setIsAlertVisible(true);
  }

  let handleMinusCartUnit = function (element2) {
    console.log(element2);
    let cart_id = element2.id;
    let product_id = element2.product_id;
    let minus = { cart_id: cart_id, product_id, product_id }
    dispatch(minusCartUnitThunk(minus));
    setIsAlertVisible(true);
  }

  let handleDeleteCartBtn = function (element2) {
    console.log(element2.id);
    dispatch(deleteCartThunk(element2.id))
  }

  //cal order total
  // const [orderTotal, setOrderTotal] = useState("");


  // let unitPrice;
  // let unitArray = [];

  //   let calOrderTotal = function () {
  //     for (const property in showcart) {
  //       for (let i = 0; i < showcart[property].length; i++) {
  //         unitPrice = ((showcart[property][i].price) * (showcart[property][i].unit));
  //         unitArray.push(unitPrice);
  //         return unitArray;
  // console.log()
  //       }
  //       console.log(unitArray)
  //     }
  //   }



  return (
    <div>
      <>
        {/* navbar */}
        <CustomerNavbar />


        {/* empty cart will render */}
        {(showcart == "") ?
          <>
            <div className=" ">
              <div className="d-flex  row  text-center justify-content-center align-items-center" style={{ margin: "150px" }}>
                <img className="" src={cartEmpty} id="emptyCartPic" />
                <h5 className=" ">Your basket is lonely</h5>
                <p className=" ">Add some items to cheer it up</p>
              </div>
            </div>
          </>
          :
          console.log("Cart is not empty")
        }

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
                                  <Button variant="outline-secondary" size="sm" onClick={() => handleMinusCartUnit(element2)}>-</Button>

                                </InputGroup>

                              </div>

                              {/* delete btn */}
                              <div className='col'>
                                <Button variant='outline-secondary' onClick={() => handleDeleteCartBtn(element2)}><RiDeleteBin6Line /></Button>
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



        {/* alert message box (add or minus) */}
        {isAlertVisible
          &&
          <div className="overlayCartMessage text-center align-items-center">
            <br /><br />
            <p id="overlayCartMessageText">{showmessagechart}</p>
            <div>
              {showmessagechart == "Added one unit" ? <AiOutlinePlusCircle className="overlayCartMessageIcon" />
                : showmessagechart == "Minus one unit" ? <AiOutlineMinusCircle className="overlayCartMessageIcon" />
                  : <MdReportProblem className="overlayCartMessageIcon" />}
            </div>
          </div>}
        <br />
        <br />


        {/* bottom total */}
        <div className="fixed-bottom">

          <Card >

            <div style={{ padding: "10px" }}>

              <div style={{ float: "left" }}>
                <p>
                  Order Total $ {showordertotal && showordertotal}
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
