// /customer/cart/purchase

import React from "react";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import { showOrderTotalThunk } from "../redux/customer_cartSlice";
import paymentQRcode from "../images/paymentQRcode.png";
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import comNavNoPic from "../images/comNavNoPic.jpg";
//bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
//react icon
import { TiTick } from "react-icons/ti";
//redux
import { useDispatch, useSelector } from "react-redux";
//react-router-dom
import { Link } from "react-router-dom";
//state
import { useState, useEffect } from "react";
//smart contract
import web3 from "../smart_contract/web3";
import purchase from "../smart_contract/purchase";





export default function CustomerPurchase() {

  const dispatch = useDispatch();

  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );
  const showordertotal = useSelector(
    (state) => state.cartReducer.showordertotal
  );

  console.log(showordertotal);

  useEffect(() => {
    dispatch(cusNavInfoThunk());
  }, []);

//metamask payment
// state = {
//   manager: "",
//   players: [],
//   balance: "",
//   value: "",
//   message: "",
// };
// async componentDidMount() {
//   const manager = await lottery.methods.manager().call();
//   const players = await lottery.methods.getPlayers().call();
//   const balance = await web3.eth.getBalance(lottery.options.address);

//   this.setState({ manager, players, balance });
// }

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
                Order Total: $ {showordertotal && showordertotal}
                <br /><br />
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
