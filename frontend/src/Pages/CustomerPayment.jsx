// /customer/payment_status

import React from 'react'
//file
import CustomerNavbar from '../Components/CustomerNavbar';
import paymentStatusSuccess from '../images/paymentStatusSuccess.png'
import paymentStatusFail from '../images/paymentStatusFail.png'
//react-router-dom
import { Link } from "react-router-dom";

export default function CustomerPayment() {
  return (
    <>
      {/* navbar */}
      <CustomerNavbar />

      {/* Success payment */}
      <br />

      <div>
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
      </div>

      <div>
        <h3 className='text-center'> Transaction Failed </h3>

        <div className='d-flex align-items-center justify-content-center'>
          <img src={paymentStatusFail} className="paymentStatusImg" />
        </div>
        <br />
        <p className='text-center'>This transaction could not be processed due to insufficient funds in your wallet, 
          <br />
          back to shopping cart by {" "}
          <Link to="/customer/cart" className='paymentRedirect'>
            clicking here
          </Link>
        </p>
      </div>


    </>
  )
}
