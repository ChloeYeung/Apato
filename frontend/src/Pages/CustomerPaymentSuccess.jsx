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
  const [payment, setPayment] = useState({
    apato: "",
    customer: "",
    balance: "",
    value: "",
    moneybackPercentage: "",
    moneyback: "",
    message: "beginning",
  });

  const dispatch = useDispatch();

  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );

  useEffect(() => {
    dispatch(cusNavInfoThunk());

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

  // handle Lucky Draw Btn
  let handleLuckyDraw = async function () {
    try {

      setPayment((prevValue) => ({
        ...prevValue,
        message: "waiting",
      }));
      console.log(payment);

      const accounts = await web3.eth.getAccounts();
      let purchaseWithLuck = await purchase.methods.refund().send({
        from: accounts[0],
      });


      const moneyBackPercentage = await purchase.methods
      .get_Refund_Percentage()
      .call({
        from: accounts[0],
      });


      setPayment((prevValue) => ({
        ...prevValue,
        moneyback: web3.utils.fromWei(String(moneyBackPercentage), "ether"),
        message: "success",
        moneybackPercentage: moneyBackPercentage/payment.balance*100,
      }));
      
    } catch (error) {
      setPayment((prevValue) => ({
        ...prevValue,
        message: "fail",
      }));
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

      {/* Success payment */}
      <br />

      <div>
        <h3 className="text-center"> Transaction Success </h3>

        <div className="d-flex align-items-center justify-content-center">
          {/* condition 1 - first enter success page */}
          {payment.message == "beginning" ? (
            <div>
              <HeadShake>
                <img
                  src={paymentStatusSuccess}
                  className="paymentStatusImg"
                  onClick={handleLuckyDraw}
                />
              </HeadShake>
            </div>
          ) : payment.message == "waiting" ? (
            <div>
              <img
                src={paymentStatusSuccess}
                className="paymentStatusImg"
                id="paymentSuccessImg"
              />
            </div>
          ) : payment.message == "fail" ? (
            <div>
                <Navigate to="/customer/cashback_fail" />
            </div>
          ) : (
            <div>
              <img
                src={paymentStatusSuccess}
                className="paymentStatusImg"
                onClick={handleLuckyDraw}
              />
            </div>
          )}
        </div>
        <br />

        {payment.message == "beginning" ? (
          <div>
            <Flash delay={1000} duration={5000}>
              <p className="text-center" id="luckyDrawIconBtn">
                Click me to have a lucky draw
              </p>
            </Flash>
          </div>
        ) : payment.message == "waiting" ? (
          <div>
            <p className="text-center" id="luckyDrawIconBtn">
              Waiting on money back success{" "}
              <Spinner animation="border" id="luckyDrawSpinner" />
            </p>
          </div>
        ) : (
          <div>
            <Wobble>
              <p className="text-center" id="luckyDrawIconBtn">
                {" "}
                Earned {payment.moneybackPercentage}% ({payment.moneyback} Eth) money back
                {console.log(payment)}
              </p>
            </Wobble>
          </div>
        )}

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
