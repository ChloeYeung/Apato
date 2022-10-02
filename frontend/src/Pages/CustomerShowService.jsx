// /customer/show_service
//bootstrap
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import cusShowSerCarousel1 from "../images/cusShowSerCarousel1.png";
import cusShowSerCarousel2 from "../images/cusShowSerCarousel2.png";
import cusShowSerCarousel3 from "../images/cusShowSerCarousel3.png";
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import comNavNoPic from "../images/comNavNoPic.jpg";
//react icon
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BiCheckCircle } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";
import { FaEthereum } from "react-icons/fa";
//state
import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  showServiceThunk,
  addCartSerThunk,
} from "../redux/customer_showServiceSlice";

export default function CustomerShowService() {
  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );
  console.log(customernavinfo);

  const showservice = useSelector(
    (state) => state.showServiceReducer.showservice
  );
  console.log(showservice);

  const addcartmessageser = useSelector(
    (state) => state.showServiceReducer.addcartmessageser
  );
  console.log(addcartmessageser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showServiceThunk());
    dispatch(cusNavInfoThunk());
  }, []);

  const handleAddCartBtn = (element) => {
    console.log(element);
    dispatch(addCartSerThunk(element));
    setShowSer(true);
  };

  //  for the toast notice
  const [showSer, setShowSer] = useState(false);
  setTimeout(() => {
    setShowSer(false);
  }, 5000);

  //navbar token
  const token = localStorage.getItem("TOKENCUS");
  console.log(token);

  return (
    <>
      <div id="cusShowServiceContainer">
        <div id="cusShowServiceBottomLayer">
          {/* Customer Navbar */}
          <CustomerNavbar
            customerImage={
              token === null
                ? comNavNoPic
                : customernavinfo.image_data === null
                ? comNavNoPic
                : `data:image/png;base64 ,${customernavinfo.image_data}`
            }
            customerName={customernavinfo.name}
          />

          {/* alert message */}
          {showSer && (
            <div className="overlayCartMessage text-center align-items-center">
              <Toast
                id="toastNoticeShowProduct"
                className="d-flex justify-content-center align-items-center text-center"
                onClose={() => setShowSer(false)}
                show={showSer}
                delay={3000}
                autohide
              >
                <Toast.Body>
                  <p id="addcartmessage"> {addcartmessageser} </p>
                  <br />
                  {addcartmessageser == "No stock remain" ? (
                    <FiAlertCircle className="addcarticon" />
                  ) : (
                    <BiCheckCircle className="addcarticon" />
                  )}
                </Toast.Body>
              </Toast>
            </div>
          )}

          {/* Carousel */}
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 cusShowProCarousel"
                src={cusShowSerCarousel1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 cusShowProCarousel"
                src={cusShowSerCarousel3}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 cusShowProCarousel"
                src={cusShowSerCarousel2}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <br />

          {/* Product card */}
          <div className="container">
            <div className="row">
              {showservice &&
                showservice.map((element, index) => (
                  <>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <Card
                        key={index + "showProductCard"}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <br />
                        <img
                          style={{ width: "150px", height: "150px" }}
                          src={`data:image/png;base64 ,${element.image_data}`}
                        />

                        <Card.Body className="text-center">
                          <Card.Title>{element.name}</Card.Title>

                          <Card.Text>
                            {element.description}
                            <br />
                            <FaEthereum className="FaEthereumIcon" />{" "}
                            {element.price}
                          </Card.Text>

                          <div className="container">
                            <div className="row">
                              <div className="col">
                                <Button
                                  variant="outline-primary"
                                  id="showServiceAddCartBtn"
                                  onClick={() => handleAddCartBtn(element)}
                                >
                                  {" "}
                                  <BsCartPlus />
                                </Button>
                              </div>
                              <div className="col">
                                <Button variant="outline-warning">
                                  {" "}
                                  <HiOutlineInformationCircle />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
