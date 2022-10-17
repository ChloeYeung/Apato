// /customer/show_service
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
import cusShowSerCarousel1 from "../images/cusShowSerCarousel1.png";
import cusShowSerCarousel2 from "../images/cusShowSerCarousel2.png";
import cusShowSerCarousel3 from "../images/cusShowSerCarousel3.png";
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import comNavNoPic from "../images/comNavNoPic.jpg";
import SortDropdown from "../Components/SortDropdown";
import snowWhite from "../images/database/snowWhite.jpg";
import joker from "../images/database/joker.jpg";
import pearEvent from "../images/database/pearEvent.jpg";
import blackberryEvent from "../images/database/blackberryEvent.jpg";
import dance from "../images/database/dance.jpg";
import mkt from "../images/database/mkt.jpg";
import music from "../images/database/music.jpg";
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
//react-router-dom
import { Link, NavLink } from "react-router-dom";

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

  // Sort
  let [sort, setSort] = useState("");
  let handleOnSortValue = function (e) {
    setSort(e);
  };

  useEffect(() => {
    dispatch(showServiceThunk());
    dispatch(cusNavInfoThunk());
  }, []);

  useEffect(() => {
    dispatch(showServiceThunk(sort));
  }, [sort]);

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

  //Search bar nav
  let [search, setSearch] = useState("");

  let handleSearchChange = function (e) {
    setSearch(e);
    console.log(e);
    console.log(search);
  };

  return (
    <>
      <div id="cusShowServiceContainer">
        <div id="cusShowServiceBottomLayer">
          {/* Customer Navbar */}
          <CustomerNavbar
            showSearch={true}
            customerImage={
              customernavinfo.name === "Snow White"
                ? snowWhite
                : customernavinfo.name === "Joker"
                ? joker
                : token === null
                ? comNavNoPic
                : customernavinfo.image_data === null
                ? comNavNoPic
                : `data:image/png;base64 ,${customernavinfo.image_data}`
            }
            customerName={customernavinfo.name}
            onChangeValue={handleSearchChange}
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

          {/* Sort dropdown */}
          <SortDropdown onSortValue={handleOnSortValue} />
          <br />

          {/* Product card */}
          <div className="container">
            <div className="row">
              {showservice &&
                showservice
                  .filter((element) => {
                    if (search === "") {
                      return element;
                    } else if (
                      element.tag
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      element.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return element;
                    } else {
                      return undefined;
                    }
                  })
                  .map((element, index) => (
                    <>
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Card
                          key={index + "showProductCard"}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <br />
                          {element.name === "Picking Blackberry Event" ? (
                            <img
                              style={{ width: "150px", height: "150px" }}
                              src={blackberryEvent}
                            />
                          ) : element.name === "Picking Pear Event" ? (
                            <img
                              style={{ width: "150px", height: "150px" }}
                              src={pearEvent}
                            />
                          ) : element.name === "Marketing Consultation" ? (
                            <img
                              style={{ width: "150px", height: "150px" }}
                              src={mkt}
                            />
                          ) : element.name === "Piano Tutorial" ? (
                            <img
                              style={{ width: "150px", height: "150px" }}
                              src={music}
                            />
                          ) : element.name === "Ballet Tutorial" ? (
                            <img
                              style={{ width: "150px", height: "150px" }}
                              src={dance}
                            />
                          ) : (
                            <img
                              style={{ width: "150px", height: "150px" }}
                              src={`data:image/png;base64 ,${element.image_data}`}
                            />
                          )}
                          {/* <img
                            style={{ width: "150px", height: "150px" }}
                            src={`data:image/png;base64 ,${element.image_data}`}
                          /> */}

                          <Card.Body className="text-center">
                            <Card.Title>{element.name}</Card.Title>

                            <Card.Text>
                              <FaEthereum className="FaEthereumIcon" />{" "}
                              {element.price}
                            </Card.Text>

                            <div className="container">
                              <div className="row">
                                <div className="col-8">
                                  {element.stock === 0 ? (
                                    <>
                                      <Alert
                                        className="text-center alertStockService"
                                        variant="danger"
                                      >
                                        Out of stock
                                      </Alert>
                                    </>
                                  ) : element.stock < 10 ? (
                                    <Alert
                                      className="text-center alertStockService"
                                      variant="warning"
                                    >
                                      Limited quantity
                                    </Alert>
                                  ) : (
                                    <Alert
                                      className="text-center alertStockService"
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
                                    to={"/customer/show_service/" + element.id}
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
