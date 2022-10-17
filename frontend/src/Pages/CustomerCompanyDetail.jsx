import React from "react";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import { showCompanyDetailThunk } from "../redux/customer_showCompanyDetailSlice";
import { addCartThunk } from "../redux/customer_showProductSlice";
import GoBack from "../Components/Back";
import comNavNoPic from "../images/comNavNoPic.jpg";
import snowWhite from "../images/database/snowWhite.jpg";
import joker from "../images/database/joker.jpg";
import pearEvent from "../images/database/pearEvent.jpg";
import blackberryEvent from "../images/database/blackberryEvent.jpg";
import dance from "../images/database/dance.jpg";
import mkt from "../images/database/mkt.jpg";
import music from "../images/database/music.jpg";
import Strawberry from "../images/database/Strawberry.jpg";
import Apple from "../images/database/Apple.jpg";
import DRInteresting from "../images/database/DRInteresting.jpg";
import PirceOfFruit from "../images/database/PirceOfFruit.jpg";

//redux
import { useDispatch, useSelector } from "react-redux";
//react icon
import { AiOutlineHome, AiOutlineComment } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { MdPointOfSale } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BiCheckCircle } from "react-icons/bi";
//bootstrap
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";
//react-router-dom
import { Link } from "react-router-dom";
//state
import { useState, useEffect } from "react";

export default function CustomerCompanyDetail() {
  const showcompanydetail = useSelector(
    (state) => state.showCompanyDetailReducer.showcompanydetail
  );

  const addcartmessage = useSelector(
    (state) => state.showProductReducer.addcartmessage
  );

  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );

  console.log(customernavinfo);

  const dispatch = useDispatch();

  useEffect(() => {
    let id = window.location;
    console.log(id.pathname.split("/")[3]);
    dispatch(showCompanyDetailThunk(id.pathname.split("/")[3]));
  }, []);

  //Search bar nav
  let [search, setSearch] = useState("");

  //add cart btn
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

  let handleSearchChange = function (e) {
    setSearch(e);
    console.log(e);
    console.log(search);
  };

  return (
    <div>
      {/* Navbar */}
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

      {/* Add cart message */}
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

      {/* Path */}
      <Alert variant="light">
        <div className="container">
          <div className="row">
            <div className="col-11">
              <Link to="/" className="rmLinkStyleClose">
                <AiOutlineHome />
              </Link>
              &nbsp; <AiOutlineRight /> &nbsp;
              <Link className="rmLinkStyleClose" to="/customer/show_company">
                Company
              </Link>
              &nbsp; <AiOutlineRight /> &nbsp;
              <Link
                className="rmLinkStyleClose"
                to={"/customer/show_company/" + showcompanydetail.company_id}
              >
                {showcompanydetail.company_name}
              </Link>
            </div>

            <div className="col-1">
              <GoBack />
            </div>
          </div>
        </div>
      </Alert>

      <div className="container">
        <div className="containerComNameAndImage">
          {showcompanydetail.company_name === "Doctor Interesting Limited" ? (
            <img src={DRInteresting} className="showProductDetailComImg" />
          ) : showcompanydetail.company_name === "Piece Of Fruit Limited" ? (
            <img src={PirceOfFruit} className="showProductDetailComImg" />
          ) : (
            <img
              src={`data:image/png;base64 ,${showcompanydetail.image_data}`}
              className="showProductDetailComImg"
            />
          )}
          {/* <img
            src={`data:image/png;base64 ,${showcompanydetail.image_data}`}
            className="showProductDetailComImg"
          /> */}
          <h5>{showcompanydetail.company_name}</h5>
        </div>
        <br />
        <div className="row text-secondary">
          <div className="col">
            <AiFillPhone /> Phone No: {showcompanydetail.phone_no}
          </div>
          <div className="col">
            <MdPointOfSale /> Sales Unit: {showcompanydetail.sales_unit}
          </div>

          <div className="col">
            <AiOutlineComment /> Chat Now
          </div>
        </div>

        <hr />

        <br />

        {/* Product Card */}
        <div className="container" style={{ padding: "5px" }}>
          <div className="row">
            {showcompanydetail.product &&
              showcompanydetail.product
                .filter((element) => {
                  if (search === "") {
                    return element;
                  } else if (
                    element.name.toLowerCase().includes(search.toLowerCase()) ||
                    element.tag.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return element;
                  } else {
                    return undefined;
                  }
                })
                .map((element, index) => (
                  <>
                    <div className="col-sm-6 col-md-4 ">
                      <Card
                        key={index + "showProductCard"}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <br />

                        {element.name === "Marketing Consultation" ? (
                          <img
                            style={{ width: "150px", height: "150px" }}
                            src={mkt}
                          />
                        ) : element.name === "Piano Tutorial" ? (
                          <img
                            style={{ width: "150px", height: "150px" }}
                            src={music}
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
                        ) : element.name === "Apple" ? (
                          <img
                            style={{ width: "150px", height: "150px" }}
                            src={Apple}
                          />
                        ) : element.name === "Strawberry" ? (
                          <img
                            style={{ width: "150px", height: "150px" }}
                            src={Strawberry}
                          />
                        ) : element.name === "Picking Blackberry Event" ? (
                          <img
                            style={{ width: "150px", height: "150px" }}
                            src={blackberryEvent}
                          />
                        ) : element.name === "Picking Pear Event" ? (
                          <img
                            style={{ width: "150px", height: "150px" }}
                            src={pearEvent}
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
                                    id="showServiceAddCartBtn"
                                    onClick={() => handleAddCartBtn(element)}
                                    variant="outline-primary"
                                    disabled
                                  >
                                    <BsCartPlus />
                                  </Button>
                                ) : (
                                  <Button
                                    id="showServiceAddCartBtn"
                                    onClick={() => handleAddCartBtn(element)}
                                    variant="outline-primary"
                                  >
                                    <BsCartPlus />
                                  </Button>
                                )}

                                {/* Descrition Btn */}
                                <Link
                                  to={`/customer/show_company/${element.company_id}/${element.id}`}
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
                      <br />
                    </div>
                  </>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
