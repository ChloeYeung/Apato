import React from "react";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import { showProductDetailThunk } from "../redux/customer_showProductDetailSlice";
import GoBack from "../Components/Back";
//redux
import { useDispatch, useSelector } from "react-redux";
//react icon
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { TbInfoCircle } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import pearEvent from "../images/database/pearEvent.jpg";
import blackberryEvent from "../images/database/blackberryEvent.jpg";
import dance from "../images/database/dance.jpg";
import mkt from "../images/database/mkt.jpg";
import music from "../images/database/music.jpg";
import Strawberry from "../images/database/Strawberry.jpg";
import Apple from "../images/database/Apple.jpg";
import DRInteresting from "../images/database/DRInteresting.jpg";
import PirceOfFruit from "../images/database/PirceOfFruit.jpg";

//bootstrap
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
//react-router-dom
import { Link } from "react-router-dom";
//state
import { useState, useEffect } from "react";

export default function CustomerShowProductDetailCom() {
  const showproductdetail = useSelector(
    (state) => state.showProductDetailReducer.showproductdetail
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let id = window.location;
    dispatch(showProductDetailThunk(id.pathname.split("/")[4]));
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
              <Link className="rmLinkStyleClose" to="/">
                <AiOutlineHome />
              </Link>
              &nbsp; <AiOutlineRight />
              &nbsp;
              <Link className="rmLinkStyleClose" to="/customer/show_company">
                Company
              </Link>
              &nbsp; <AiOutlineRight /> &nbsp;
              <Link
                className="rmLinkStyleClose"
                to={"/customer/show_company/" + showproductdetail.company_id}
              >
                {showproductdetail.company_name}
              </Link>
              &nbsp;
              <AiOutlineRight /> &nbsp;
              <Link
                className="rmLinkStyleClose"
                to={
                  "/customer/show_company/" +
                  showproductdetail.company_id +
                  "/" +
                  showproductdetail.id
                }
              >
                {showproductdetail.name}
              </Link>
            </div>
            <div className="col-1">
              <GoBack />
            </div>
          </div>
        </div>
      </Alert>

      {/* Information */}
      <div className="container">
        <div className="text-center">
          {showproductdetail.name === "Marketing Consultation" ? (
            <img src={mkt} className="showProductDetailImg" />
          ) : showproductdetail.name === "Piano Tutorial" ? (
            <img src={music} className="showProductDetailImg" />
          ) : showproductdetail.name === "Ballet Tutorial" ? (
            <img src={dance} className="showProductDetailImg" />
          ) : showproductdetail.name === "Apple" ? (
            <img src={Apple} className="showProductDetailImg" />
          ) : showproductdetail.name === "Strawberry" ? (
            <img src={Strawberry} className="showProductDetailImg" />
          ) : showproductdetail.name === "Picking Blackberry Event" ? (
            <img src={blackberryEvent} className="showProductDetailImg" />
          ) : showproductdetail.name === "Picking Pear Event" ? (
            <img src={pearEvent} className="showProductDetailImg" />
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
          {showproductdetail.company_name === "Piece Of Fruit Limited" ? (
            <img src={PirceOfFruit} className="showProductDetailComImg" />
          ) : showproductdetail.company_name ===
            "Doctor Interesting Limited" ? (
            <img src={DRInteresting} className="showProductDetailComImg" />
          ) : (
            <img
              src={`data:image/png;base64 ,${showproductdetail.company_image}`}
              className="showProductDetailComImg"
            />
          )}
          {/* <img
            src={`data:image/png;base64 ,${showproductdetail.company_image}`}
            className="showProductDetailComImg"
          /> */}
        </div>
        <br />

        {/* Detail Information */}
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
