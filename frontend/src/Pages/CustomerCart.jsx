// /customer/cart
import React from "react";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import logo from "../logo.svg";
import cartEmpty from "../images/cartEmpty2.png";
import comNavNoPic from "../images/comNavNoPic.jpg";
import {
  showCartThunk,
  addCartUnitThunk,
  minusCartUnitThunk,
  deleteCartThunk,
  showOrderTotalThunk,
} from "../redux/customer_cartSlice";
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import snowWhite from "../images/database/snowWhite.jpg"
import joker from "../images/database/joker.jpg"

//bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";
//react icon
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrConsole, GrFormAdd } from "react-icons/gr";
import { TbMinus } from "react-icons/tb";
import { AiOutlineConsoleSql, AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CustomerCart() {
  const showcart = useSelector((state) => state.cartReducer.showcart);
  const showmessagechart = useSelector(
    (state) => state.cartReducer.showmessagecart
  );
  const showordertotal = useSelector(
    (state) => state.cartReducer.showordertotal
  );
  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );

  // console.log(showcart);
  // console.log(showmessagechart);
  console.log(customernavinfo);
  // console.log(showordertotal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCartThunk());
    dispatch(showOrderTotalThunk());
    dispatch(cusNavInfoThunk());
  }, []);

  // alert box
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  setTimeout(() => {
    setIsAlertVisible(false);
  }, 3000);

  let handleAddCartUnit = function (element2) {
    let cart_id = element2.id;
    let product_id = element2.product_id;
    let add = { cart_id: cart_id, product_id, product_id };
    dispatch(addCartUnitThunk(add));
    setIsAlertVisible(true);
  };

  let handleMinusCartUnit = function (element2) {
    let cart_id = element2.id;
    let product_id = element2.product_id;
    let minus = { cart_id: cart_id, product_id, product_id };
    dispatch(minusCartUnitThunk(minus));
    setIsAlertVisible(true);
  };

  let handleDeleteCartBtn = function (element2) {
    dispatch(deleteCartThunk(element2.id));
  };


  return (
    <div>
      <>
        {/* navbar */}
        <CustomerNavbar
          customerImage={
            customernavinfo.name === "Snow White"
              ? snowWhite : 
              customernavinfo.name === "Joker"
              ? joker : 
            customernavinfo.image_data === null
              ? comNavNoPic
              : 
              `data:image/png;base64 ,${customernavinfo.image_data}`
          }
          customerName={customernavinfo.name}
        />

        {/* empty cart will render */}
        {showcart == "" ? (
          <>
            <div className=" ">
              <div
                className="d-flex  row  text-center justify-content-center align-items-center"
                style={{ margin: "150px" }}
              >
                <img className="" src={cartEmpty} id="emptyCartPic" />
                <h5 className=" ">Your basket is lonely</h5>
                <p className=" ">Add some items to cheer it up</p>
              </div>
            </div>
          </>
        ) : (
          console.log("Cart is not empty")
        )}

        {/* product cart */}
        {showcart &&
          showcart.map((element1, index) => (
            <>
              <Card key={index + "showcart"}>
                <Card.Body>
                  {/* company title */}
                  <h3 style={{ marginLeft: "30px" }} className="text-secondary">
                    {element1[0].name}
                  </h3>

                  {element1.map((element2) => (
                    <>
                      <div className="row">
                        {/* product image */}
                        <div className="col">
                          <img
                            src={`data:image/png;base64 ,${element2.image_data}`}
                            style={{ height: "150px", width: "150px" }}
                          />
                        </div>

                        {/* product info */}
                        <div className="col" style={{ padding: "15px" }}>
                          {/* container - base info */}
                          <Card.Text>
                            <h4>{element2.product_name}</h4>
                            <p>
                              <FaEthereum className="FaEthereumIcon" />{" "}
                              {element2.price}{" "}
                            </p>
                          </Card.Text>

                          {/* container - button group */}
                          <div className="row">
                            <div className="col">
                              <InputGroup>
                                <Button
                                  variant="outline-secondary"
                                  size="sm"
                                  onClick={() => handleAddCartUnit(element2)}
                                >
                                  +
                                </Button>
                                <Form.Control
                                  value={element2.unit}
                                  style={{ maxWidth: "50px" }}
                                  className="text-center"
                                />
                                <Button
                                  variant="outline-secondary"
                                  size="sm"
                                  onClick={() => handleMinusCartUnit(element2)}
                                >
                                  -
                                </Button>
                              </InputGroup>
                            </div>

                            {/* delete btn */}
                            <div className="col">
                              <Button
                                variant="outline-secondary"
                                onClick={() => handleDeleteCartBtn(element2)}
                              >
                                <RiDeleteBin6Line />
                              </Button>
                            </div>
                          </div>

                          {/* container - stock info */}
                          <div>
                            <Card.Text className="text-secondary">
                              remaining stock:{element2.stock}
                            </Card.Text>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </Card.Body>
              </Card>
            </>
          ))}

        <br />
        <br />

        {/* alert message box (add or minus) */}
        {isAlertVisible && (
          <div className="overlayCartMessage text-center align-items-center">
            <Toast>
              <Toast.Body>
                <br />
                <p id="overlayCartMessageText">{showmessagechart}</p>
                <div>
                  {showmessagechart == "Added one unit" ? (
                    <AiOutlinePlusCircle className="overlayCartMessageIcon" />
                  ) : showmessagechart == "Minus one unit" ? (
                    <AiOutlineMinusCircle className="overlayCartMessageIcon" />
                  ) : (
                    <MdReportProblem className="overlayCartMessageIcon" />
                  )}
                </div>
              </Toast.Body>
            </Toast>
          </div>
        )}

        {/* bottom total */}
        <div className="fixed-bottom">
          <Card>
            <div style={{ padding: "10px" }}>
              <div style={{ float: "left" }}>
                <p>
                  Order Total <FaEthereum className="FaEthereumIcon" />{" "}
                  {showordertotal && showordertotal}
                </p>
              </div>

              {showordertotal == 0 ? (
                <div></div>
              ) : (
                <div style={{ float: "right" }}>
                  <Button variant="outline-secondary">
                    <Link to="/customer/purchase" className="rmLinkStyle">
                      Purchase
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </>
    </div>
  );
}
