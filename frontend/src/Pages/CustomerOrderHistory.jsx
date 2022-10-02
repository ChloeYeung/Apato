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

  const [history, setHistory] = useState("");
  console.log(customernavinfo);
  console.log(showorderhistory);

  useEffect(() => {
    dispatch(cusNavInfoThunk());
    dispatch(showOrderHistoryThunk());
    setHistory(showorderhistory);
  }, []);
  console.log(history);
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
      {showorderhistory && showorderhistory.map((element, index) => <></>)}
      {showorderhistory &&
        showorderhistory.map((element1, index) => (
          <>
            <div key={"orderHistoryNo" + index} className="container">
              <div className="d-flex text-center justify-content-center align-items-center">
                <Card style={{ width: "25rem" }}>
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      Order number # {element1[0].order_id}
                    </Card.Title>
                    <Card.Text>
                      Date{element1[0].date} 
                      Status{element1[0].status} 
                      Company {element1[0].name}
                    </Card.Text>
                    <hr />

                    {element1.map((element2) => (
                      <>
                        <div className="row" >
                          <div className="col">
                            <img
                              src={`data:image/png;base64 ,${element2.image_data}`}
                              style={{ height: "150px", width: "150px" }}
                            />{" "}
                          </div>
                          <div className="col">
                            <p>Name {element2.product_name}</p>

                            <p>Unit</p>
                            <p>
                              Unit price {element2.price}
                              <FaEthereum className="FaEthereumIcon" />
                            </p>
                            <p>
                              Total <FaEthereum className="FaEthereumIcon" />
                            </p>
                          </div>
                        </div>
                      </>
                    ))}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}
