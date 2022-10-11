// /customer/payment_status
import React from "react";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import paymentStatusSuccess from "../images/paymentStatusSuccess.png";
import refundStatusFail from "../images/cusRefundStatusFail.png";
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import comNavNoPic from "../images/comNavNoPic.jpg";
//react-router-dom
import { Link } from "react-router-dom";
//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";

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
      <br />

      {/* Success Fail */}
      <div>
        <h3 className="text-center"> Moneyback Failed </h3>
        <div className="d-flex align-items-center justify-content-center">
          <img src={refundStatusFail} className="paymentStatusImg" />
        </div>
        <br />
        <p className="text-center">
          Due to improper manipulation, the lucky draw could not be processed;
          please contact &nbsp;{" "}
          <a href="mailto: apatonet.gmail.com"> apatonet.gmail.com </a> &nbsp;
          for assistance.
        </p>
      </div>
    </>
  );
}
