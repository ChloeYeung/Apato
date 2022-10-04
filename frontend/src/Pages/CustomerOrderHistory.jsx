//customer/order_history

import React from "react";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import logo from "../logo.svg";
import comNavNoPic from "../images/comNavNoPic.jpg";
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import { showOrderHistoryThunk } from "../redux/customer_orderHistory";
//react icon
import { FaEthereum } from "react-icons/fa";
//bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";

export default function CustomerOrderHistory() {
  const dispatch = useDispatch();

  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );

  const showorderhistory = useSelector(
    (state) => state.orderHistoryReducer.showorderhistory
  );


  useEffect(() => {
    dispatch(cusNavInfoThunk());
    dispatch(showOrderHistoryThunk());
    Object.entries(showorderhistory);
  }, []);

  let handlecusHistoryTotal = function (element) {
    let totalPrice = 0;

    element[1].forEach((e) => {
      totalPrice += e.unit * e.price;
    });

    return totalPrice;
  };

  return (
    <div>
      {/* Navbar */}
      <CustomerNavbar
        customerImage={
          customernavinfo.image_data === null
            ? comNavNoPic
            : `data:image/png;base64 ,${customernavinfo.image_data}`
        }
        customerName={customernavinfo.name}
      />

      {/* Title */}
      <br />
      <h3 className="text-center">Order History</h3>

      <br />

      {/* order card */}
      {showorderhistory &&
        Object.entries(showorderhistory).map((element, index) => {
          return (
            <>
              <div key={"orderHistoryNo"+index} className="container">
                <div className="d-flex  justify-content-center align-items-center">
                  <Card style={{ width: "50rem" }}>
                    <Card.Body>
                      <Card.Title className="text-center">
                        {" "}
                        Order number # {element[0]}
                      </Card.Title>
                      <Card.Title className="text-center">
                        {" "}
                        {element[1][0].name}
                      </Card.Title>
                      <Card.Text className="text-secondary text-center">
                        <div className="container">
                          <div className="row">
                            <div className="col">{element[1][0].date}</div>
                            <div className="col">{element[1][0].time}</div>
                            <div className="col">
                              {element[1][0].status}
                            </div>{" "}
                          </div>
                        </div>
                      </Card.Text>
                      <hr />
                      {element[1] &&
                        element[1].map((element2) => (
                          <>
                            <div className="row">
                              <div className="col">
                                <img
                                  src={`data:image/png;base64 ,${element2.image_data}`}
                                  style={{ height: "150px", width: "150px" }}
                                />{" "}
                              </div>
                              <div className="col">
                                <p>Name: {element2.product_name} </p>

                                <p>Unit: {element2.unit}</p>
                                <p>
                                  Unit price: {element2.price}
                                  <FaEthereum className="FaEthereumIcon" />
                                </p>
                                <p>
                                  Total:{" "}
                                  <span id={"cusHistoryTotal" + index}>
                                    {element2.unit * element2.price}
                                  </span>
                                  <FaEthereum className="FaEthereumIcon" />
                                </p>
                              </div>
                            </div>
                            <br />
                          </>
                        ))}
                      <hr />
                      Order Total:
                      <span id="cusHistoryOrderTotal">
                        {handlecusHistoryTotal(element)}
                        <FaEthereum className="FaEthereumIcon" />
                      </span>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <br />
            </>
          );
        })}
    </div>
  );
}
