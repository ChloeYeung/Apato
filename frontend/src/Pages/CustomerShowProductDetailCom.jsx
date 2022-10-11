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
