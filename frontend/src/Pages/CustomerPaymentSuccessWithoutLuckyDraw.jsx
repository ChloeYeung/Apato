// /customer/payment_status

import React from "react";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import paymentStatusSuccess from "../images/paymentStatusSuccess.png";
import paymentStatusFail from "../images/paymentStatusFail.png";
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import comNavNoPic from "../images/comNavNoPic.jpg";
//react-router-dom
import { Link, Navigate } from "react-router-dom";
//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//animation
import Flash from "react-reveal/Flash";
import HeadShake from "react-reveal/HeadShake";
import Wobble from "react-reveal/Wobble";
//icon
import { FaEthereum } from "react-icons/fa";
//smart contract
import web3 from "../smart_contract/web3";
import purchase from "../smart_contract/purchase";
//bootstrap
import Spinner from "react-bootstrap/Spinner";

export default function CustomerPayment() {
  const dispatch = useDispatch();

  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );

  useEffect(() => {
    dispatch(cusNavInfoThunk());
  }, []);

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

      {/* Success payment */}
      <br />

      <div>
        <h3 className="text-center"> Transaction Success </h3>

        <div className="d-flex align-items-center justify-content-center">
          {/* condition 1 - first enter success page */}

          <HeadShake>
            <img src={paymentStatusSuccess} className="paymentStatusImg" />
          </HeadShake>

          {/* condition 2 - clicked the img & drawing */}
          {/* <img
            src={paymentStatusSuccess}
            className="paymentStatusImg"
            id="paymentSuccessImg"
          
          /> */}
          {/* condition 3 - after lucky draw */}
          {/* <img src={paymentStatusSuccess} className="paymentStatusImg" /> */}
        </div>
        <br />

        <p className="text-center">
          Thank you for your patronage,{" "}
          <Link to="/customer/order_history" className="paymentRedirect">
            click here
          </Link>{" "}
          to view your order history.
        </p>
      </div>

      <div></div>
    </>
  );
}
