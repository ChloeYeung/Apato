// /customer/cart/purchase

import React from "react";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import {
  showOrderTotalPurchaseThunk,
  addOrderHistoryThunk,
  delOrderTotalPurchaseThunk,
  updateCompanyStockThunk,
} from "../redux/customer_purchaseSlice";
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import comNavNoPic from "../images/comNavNoPic.jpg";
//bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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

  const [checkedornot, toggleChecked] = useState(true);

  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );

  //metamask payment
  const [successPayment, setSuccessPayment] = useState(false);
  const [failPayment, setFailPayment] = useState(false);
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
      if (checkedornot == true) {
        let purchaseWithLuck = await purchase.methods.purchaseWithLuck().send({
          from: accounts[0],
          value: web3.utils.toWei(String(showOrderTotalPurchase), "ether"),
        });
      } else {
        let purchaseWithOutLuck = await purchase.methods
          .purchaseWithOutLuck()
          .send({
            from: accounts[0],
            value: web3.utils.toWei(String(showOrderTotalPurchase), "ether"),
          });
      }

      setSuccessPayment(true);
      dispatch(updateCompanyStockThunk());

      dispatch(addOrderHistoryThunk());

      dispatch(delOrderTotalPurchaseThunk());

      setPayment((prevValue) => ({
        ...prevValue,
        message: "Transaction success",
      }));
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
        <h1 className="purchasePageFont">Payment</h1>
        <p>Check your order total and check CONFIRM to process payment</p>
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
                <br />
                <br />
                <div className="container">
                  <div className="row">
                    <div className="col-2">
                      <input
                        type="checkbox"
                        // id="chooseLuckyDraw"
                        name="chooseLuckyDraw"
                        value="lucky"
                        checked={checkedornot}
                        onClick={() => toggleChecked(!checkedornot)}
                      />
                    </div>
                    <div className="col-8">
                      <p>Tick the box to test your luck</p>
                    </div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />

      <div className="text-center text-secondary">
        {(payment.message == "Waiting on transaction success") ? (
          <p>
            {" "}
            {payment.message} <Spinner animation="border" variant="warning" />{" "}
          </p>
        ) : (payment.message == "Transaction success" && checkedornot) ? (
          <p>
            {" "}
            {payment.message} <AiOutlineCheck />
            <Navigate to="/customer/payment_success" />
          </p>
        ) : (payment.message == "Transaction success") &&
          checkedornot == false ? (
          <p>
            {" "}
            {payment.message} <AiOutlineCheck />
            <Navigate to="/customer/payment_success/withoutLuckDraw" />
          </p>
        ) : (payment.message == "Please click CONFIRM to process payment") ? (
          <p>{payment.message}</p>
        ) : (
          <p>
            {" "}
            {payment.message} <MdOutlineSmsFailed />
            <Navigate to="/customer/payment_fail" />
          </p>
        )}
      </div>


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
