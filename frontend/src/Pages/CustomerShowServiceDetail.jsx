import React from "react";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import { showProductDetailThunk } from "../redux/customer_showProductDetailSlice";
import pearEvent from "../images/database/pearEvent.jpg";
import blackberryEvent from "../images/database/blackberryEvent.jpg";
import dance from "../images/database/dance.jpg";
import mkt from "../images/database/mkt.jpg";
import music from "../images/database/music.jpg";
import DRInteresting from "../images/database/DRInteresting.jpg";
import PirceOfFruit from "../images/database/PirceOfFruit.jpg";
//redux
import { useDispatch, useSelector } from "react-redux";
//react icon
import { BsReverseBackspaceReverse } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { TbInfoCircle } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
//bootstrap
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
//react-router-dom
import { Link } from "react-router-dom";
//state
import { useState, useEffect } from "react";

export default function CustomerShowProductDetail() {
  const showproductdetail = useSelector(
    (state) => state.showProductDetailReducer.showproductdetail
  );
  console.log(showproductdetail);

  const dispatch = useDispatch();

  useEffect(() => {
    let id = window.location;
    dispatch(showProductDetailThunk(id.pathname.split("/")[3]));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <CustomerNavbar />

      {/* Path */}
      <Alert variant="light">
        <div className="container">
          <div className="row">
            <div className="col-11">
              <Link to="/" className="rmLinkStyleClose">
                <AiOutlineHome />
              </Link>
              &nbsp; <AiOutlineRight /> &nbsp;
              <Link to="/customer/show_service" className="rmLinkStyleClose">
                Service
              </Link>
              &nbsp;
              <AiOutlineRight /> &nbsp;
              <Link
                to={"/customer/show_service/" + showproductdetail.id}
                className="rmLinkStyleClose"
              >
                {showproductdetail.name}
              </Link>
            </div>

            <div className="col-1">
              <Link to="/customer/show_service">
                <AiOutlineClose className="rmLinkStyleClose" />
              </Link>
            </div>
          </div>
        </div>
      </Alert>

      <div className="container">
        <div className="text-center">
          {showproductdetail &&
          showproductdetail.name === "Picking Blackberry Event" ? (
            <img className="showProductDetailImg" src={blackberryEvent} />
          ) : showproductdetail.name === "Picking Pear Event" ? (
            <img className="showProductDetailImg" src={pearEvent} />
          ) : showproductdetail.name === "Marketing Consultation" ? (
            <img className="showProductDetailImg" src={mkt} />
          ) : showproductdetail.name === "Piano Tutorial" ? (
            <img className="showProductDetailImg" src={music} />
          ) : showproductdetail.name === "Ballet Tutorial" ? (
            <img className="showProductDetailImg" src={dance} />
          ) : (
            <img
              src={`data:image/png;base64 ,${showproductdetail.image_data}`}
              className="showProductDetailImg"
            />
          )}
          {/* <img
            src={`data:image/png;base64 ,${showproductdetail.image_data}`}
            className="showProductDetailImg"
          /> */}
        </div>

        <br />
        <br />
        <span>
          <h3>{showproductdetail.name} </h3>
          <h5>
            <FaEthereum className="FaEthereumIcon" /> {showproductdetail.price}{" "}
          </h5>
        </span>

        <br />
        <hr />

        <div className="containerComNameAndImage">
          <h5>{showproductdetail.company_name}</h5>
          {showproductdetail.company_name === "Doctor Interesting Limited" ? (
            <img src={DRInteresting} className="showProductDetailComImg" />
          ) : showproductdetail.company_name === "Piece Of Fruit Limited" ? (
            <img src={PirceOfFruit} className="showProductDetailComImg" />
          ) : (
            <img
              src={`data:image/png;base64 ,${showproductdetail.company_image}`}
              className="showProductDetailComImg"
            />
          )}
        </div>

        <br />
        <p>
          <TbInfoCircle />
          &nbsp; Description: {showproductdetail.description}
        </p>
        <p>
          <BiCategoryAlt />
          &nbsp; Category: {showproductdetail.tag}
        </p>
        <p>
          <BsBoxSeam />
          &nbsp; Stock: {showproductdetail.stock}
        </p>

        <br />
      </div>
    </div>
  );
}
