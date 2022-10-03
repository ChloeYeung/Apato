// /customer/payment_status

import React from 'react'
//file
import CustomerNavbar from '../Components/CustomerNavbar';
import paymentStatusSuccess from '../images/paymentStatusSuccess.png'
import refundStatusFail from '../images/cusRefundStatusFail.png';
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import comNavNoPic from '../images/comNavNoPic.jpg';
//react-router-dom
import { Link } from "react-router-dom";
//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";

export default function CustomerPayment() {
  const dispatch = useDispatch();

  const customernavinfo = useSelector((state) => state.navbarCusReducer.customernavinfo);

  useEffect(() => {
    dispatch(cusNavInfoThunk());
  }, []);
  return (
    <>
      {/* navbar */}
      <CustomerNavbar
        customerImage={customernavinfo.image_data === null ? comNavNoPic : `data:image/png;base64 ,${customernavinfo.image_data}`}
        customerName={customernavinfo.name} />

      {/* Success Fail */}
      <br />

      {/* <div>
        <h3 className='text-center'> Transaction Success </h3>

        <div className='d-flex align-items-center justify-content-center'>
          <img src={paymentStatusSuccess} className="paymentStatusImg" />
        </div>
        <br />
        <p className='text-center'>Thank you for your patronage, {" "}
          <Link to="/customer/order_history" className='paymentRedirect'>
            click here
          </Link>
          {" "} to view your order history.</p>
      </div> */}

      <div>
        <h3 className='text-center'> Moneyback Failed </h3>

        <div className='d-flex align-items-center justify-content-center'>
          <img src={refundStatusFail} className="paymentStatusImg" />
        </div>
        <br />
        <p className='text-center'>Due to improper manipulation, the lucky draw could not be processed; please contact &nbsp; <a href="mailto: apatonet.gmail.com"> apatonet.gmail.com </a> &nbsp; for assistance.
          {/* <br />
          back to shopping cart by {" "}
          <Link to="/customer/cart" className='paymentRedirect'>
            clicking here
          </Link> */}
        </p>
      </div>


    </>
  )
}
