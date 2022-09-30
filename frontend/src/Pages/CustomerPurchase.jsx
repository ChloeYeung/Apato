// /customer/cart/purchase

import React from "react";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import {
  showOrderTotalPurchaseThunk,
  delOrderTotalPurchaseThunk,
} from "../redux/customer_purchaseSlice";
import paymentQRcode from "../images/paymentQRcode.png";
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import comNavNoPic from "../images/comNavNoPic.jpg";
//bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
//react icon
import { TiTick } from "react-icons/ti";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineSmsFailed } from "react-icons/md";
//redux
import { useDispatch, useSelector, useStore } from "react-redux";
//react-router-dom
import { Link, Navigate } from "react-router-dom";
//state
import { useState, useEffect } from "react";
//smart contract
import web3 from "../smart_contract/web3";
import purchase from "../smart_contract/purchase";
import { bindActionCreators } from "@reduxjs/toolkit";

export default function CustomerPurchase() {
  const dispatch = useDispatch();

  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );

  //metamask payment
  const [successPayment, setSuccessPayment] = useState(false);
  console.log(successPayment);
  const [failPayment, setFailPayment] = useState(false);
  console.log(failPayment);
  const [payment, setPayment] = useState({
    apato: "",
    customer: "",
    balance: "",
    value: "",
    message: "Please click COMFIRM to process payment",
  });

  let showOrderTotalPurchase = useSelector(
    (state) => state.purchaseReducer.showordertotalpurchase
  );

  useEffect(() => {
    dispatch(cusNavInfoThunk());
    dispatch(showOrderTotalPurchaseThunk());
    const smartContract = async () => {
      // const solPurchase = await purchase.methods.customer.call();
      // console.log(solPurchase);
      const apato = await purchase.methods.apato().call();
      const balance = await web3.eth.getBalance(purchase.options.address);
      setPayment((prevValue) => ({
        ...prevValue,
        apato: apato,
        balance: balance,
      }));
    };
    smartContract();
  }, []);

  //check if the provided address account and the actual account similar
  let handlePaymentAccountSubmit = async () => {
    console.log("in handlePaymentAccountSubmit");

    setPayment((prevValue) => ({
      ...prevValue,
      message: "Waiting on transaction success",
    }));
    console.log(payment);
    const accounts = await web3.eth.getAccounts();

    try {
      const purchase1 = await purchase.methods.purchase().send({
        from: accounts[0],
        value: web3.utils.toWei(String(showOrderTotalPurchase), "ether"),
      });

      setPayment((prevValue) => ({
        ...prevValue,
        message: "Transaction success",
      }));
      console.log(payment);

      setSuccessPayment(true);

      dispatch(delOrderTotalPurchaseThunk());
    } catch (error) {
      setPayment((prevValue) => ({
        ...prevValue,
        message: "Transaction fail",
      }));
      setFailPayment(true);
      console.log("Transaction fail");
      console.log(error);
    }
  };

  return (
    <>
      {/* navbar */}
      <CustomerNavbar
        customerImage={
          customernavinfo.image_data === null
            ? comNavNoPic
            : `data:image/png;base64 ,${customernavinfo.image_data}`
        }
        customerName={customernavinfo.name}
      />

      <div className="text-center">
        <h1>Payment</h1>
        <p>Click the link or scan the QR code to process payment</p>
      </div>

      {/* summary card */}
      <div className="container">
        <div className="d-flex   text-center justify-content-center align-items-center">
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title> Summary </Card.Title>
              <hr />
              <Card.Text>
                Order Total: <FaEthereum className="FaEthereumIcon" />{" "}
                {showOrderTotalPurchase && showOrderTotalPurchase}
                <br />
                <br />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={handlePaymentAccountSubmit}
                >
                  {/* <Link to="/customer/payment_status" className="rmLinkStyle">
                      {" "} */}
                  Confirm <TiTick />
                  {/* </Link> */}
                </Button>
                {/* </InputGroup> */}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />

      <div className="text-center text-secondary">
        {payment.message == "Waiting on transaction success" ? (
          <p>
            {" "}
            {payment.message} <Spinner animation="border" variant="warning" />{" "}
          </p>
        ) : payment.message == "Transaction success" ? (
          <p>
            {" "}
            {payment.message} <AiOutlineCheck />
            <Navigate to="/customer/payment_success" />
          </p>
        ) : payment.message == "Please click COMFIRM to process payment" ? (
          <p>{payment.message}</p>
        ) : (
          <p>
            {" "}
            {payment.message} <MdOutlineSmsFailed />
            <Navigate to="/customer/payment_fail" />
          </p>
        )}
      </div>

      {/* navigate */}
      {/* {successPayment && (
        <Navigate to="/customer/payment_success" />
      )}
      {failPayment && <Navigate to="/customer/payment_fail" />} */}

      {/* payment code */}
      {/* <div className="container">
        <div className="d-flex text-center justify-content-center align-items-center">
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Img variant="top" src={paymentQRcode} />
              <Card.Title> <u> Payment Link: 0x0a65c3660771279FeDE36cc8AD304c3E9AD150e3 </u>  </Card.Title>
              <Card.Text>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="account number"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    <Link to="/customer/payment_status" className="rmLinkStyle">
                      {" "}
                      <TiTick />
                    </Link>
                  </Button>
                </InputGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />

      <br /> */}

      <br />
      <br />
      <br />
      {/* reminder */}
      <Alert variant="warning" className="fixed-bottom text-center">
        Please do not interrupt the network during the payment process until the
        payment is success
      </Alert>
    </>
  );
}
