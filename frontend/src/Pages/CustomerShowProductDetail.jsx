import React from "react";

//file
import CustomerNavbar from "../Components/CustomerNavbar";
import { showProductDetailThunk } from "../redux/customer_showProductDetailSlice";
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
              <AiOutlineHome /> &nbsp; <AiOutlineRight /> &nbsp; Product &nbsp;{" "}
              <AiOutlineRight /> &nbsp; {showproductdetail.name}
            </div>

            <div className="col-1">
              <Link to="/customer/show_product">
                <AiOutlineClose className="rmLinkStyleClose" />
              </Link>
            </div>
          </div>
        </div>
      </Alert>

      <div className="container">
        <div className="text-center">
          <img
            src={`data:image/png;base64 ,${showproductdetail.image_data}`}
            className="showProductDetailImg"
          />
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
          <img
            src={`data:image/png;base64 ,${showproductdetail.company_image}`}
            className="showProductDetailComImg"
          />
        </div>

        <br />
        <p>
          <TbInfoCircle /> &nbsp; Description: {showproductdetail.description}
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
