// /customer/show_product
//bootstrap
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Alert from "react-bootstrap/Alert";

//file
import CustomerNavbar from "../Components/CustomerNavbar";
import cusShowProCarousel1 from "../images/cusShowProCarousel1.png";
import cusShowProCarousel2 from "../images/cusShowProCarousel2.png";
import cusShowProCarousel3 from "../images/cusShowProCarousel3.png";
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
  showProductThunk,
  addCartThunk,
} from "../redux/customer_showProductSlice";
//react-router-dom
import { Link, NavLink } from "react-router-dom";

export default function CustomerShowProduct() {
  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );
  console.log(customernavinfo);

  const showproduct = useSelector(
    (state) => state.showProductReducer.showproduct
  );
  console.log(showproduct);

  const addcartmessage = useSelector(
    (state) => state.showProductReducer.addcartmessage
  );
  console.log(addcartmessage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showProductThunk());
    dispatch(cusNavInfoThunk());
  }, []);

  const handleAddCartBtn = (element) => {
    console.log(element);
    dispatch(addCartThunk(element));
    setShow(true);
  };

  //  for the toast notice
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(false);
  }, 5000);

  //navbar token
  const token = localStorage.getItem("TOKENCUS");
  console.log(token);

  return (
    <>
      <div id="cusShowProductContainer">
        <div id="cusShowProductBottomLayer">
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

          {show && (
            <div className="overlayCartMessage text-center align-items-center">
              <Toast
                id="toastNoticeShowProduct"
                className="d-flex justify-content-center align-items-center text-center"
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
                autohide
              >
                <Toast.Body>
                  <p id="addcartmessage"> {addcartmessage} </p>
                  <br />
                  {addcartmessage == "No stock remain" ? (
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
                src={cusShowProCarousel1}
                alt="First slide"
                // style={{ maxHeight: "400px" }}
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 cusShowProCarousel"
                src={cusShowProCarousel3}
                alt="Second slide"
                // style={{ maxHeight: "400px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 cusShowProCarousel"
                src={cusShowProCarousel2}
                alt="Third slide"
                // style={{ maxHeight: "400px" }}
              />
            </Carousel.Item>
          </Carousel>
          <br />

          {/* Product card */}
          <div className="container" style={{ padding: "5px" }}>
            <div className="row">
              {showproduct &&
                showproduct.map((element, index) => (
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
                          <></>

                          <div className="container">
                            <div className="row">
                              <div className="col-8">
                                {element.stock === 0 ? (
                                  <>
                                    <Alert
                                      className="text-center alertStockProduct"
                                      variant="danger"
                                    >
                                      Out of stock
                                    </Alert>
                                  </>
                                ) : element.stock < 10 ? (
                                  <Alert
                                    className="text-center alertStockProduct"
                                    variant="warning"
                                  >
                                    Limited quantity
                                  </Alert>
                                ) : (
                                  <Alert
                                    className="text-center alertStockProduct"
                                    variant="success"
                                  >
                                    Large stock
                                  </Alert>
                                )}
                              </div>

                              <div className="col-4">
                                {/* Add cart btn */}
                                {element.stock == 0 ? (
                                  <Button
                                    id="showProductAddCartBtn"
                                    onClick={() => handleAddCartBtn(element)}
                                    variant="outline-primary"
                                    disabled
                                  >
                                    <BsCartPlus />
                                  </Button>
                                ) : (
                                  <Button
                                    id="showProductAddCartBtn"
                                    onClick={() => handleAddCartBtn(element)}
                                    variant="outline-primary"
                                  >
                                    <BsCartPlus />
                                  </Button>
                                )}
                             

                 
                                {/* Descrition Btn */}
                                <Link
                                  to={"/customer/show_product/" + element.id}
                                >
                                  <Button variant="outline-warning">
                                    {" "}
                                    <HiOutlineInformationCircle />
                                  </Button>
                                </Link>
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
