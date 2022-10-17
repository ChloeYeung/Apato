// /customer/show_company
//bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//file
import CustomerNavbar from "../Components/CustomerNavbar";
import { cusNavInfoThunk } from "../redux/customer_navbarSlice";
import comNavNoPic from "../images/comNavNoPic.jpg";
import snowWhite from "../images/database/snowWhite.jpg";
import joker from "../images/database/joker.jpg";
//react icon
import { BsShop } from "react-icons/bs";
//state
import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  showProductThunk,
  addCartThunk,
} from "../redux/customer_showProductSlice";
import { showCompanyThunk } from "../redux/customer_showCompanySlice";
//react-router-dom
import { Link, NavLink, useParams } from "react-router-dom";

export default function CustomerShowAllCompany() {
  const customernavinfo = useSelector(
    (state) => state.navbarCusReducer.customernavinfo
  );

  const showcompany = useSelector(
    (state) => state.showCompanyReducer.showcompany
  );
  console.log(showcompany);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cusNavInfoThunk());
    dispatch(showCompanyThunk());
  }, []);

  //navbar token
  const token = localStorage.getItem("TOKENCUS");

  //Search bar nav
  let [search, setSearch] = useState("");

  let handleSearchChange = function (e) {
    setSearch(e);
    console.log(e);
    console.log(search);
  };

  return (
    <>
      <div id="cusShowProductContainer">
        <div id="cusShowProductBottomLayer">
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

          <br />

          {/* Coompany card */}
          <div className="container" style={{ padding: "5px" }}>
            <div className="row">
              {showcompany &&
                showcompany
                  .filter((element) => {
                    if (search === "") {
                      return element;
                    } else if (
                      element.name
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

              
                          <img
                            style={{ width: "150px", height: "150px" }}
                            src={`data:image/png;base64 ,${element.image_data}`}
                          />
                          <Card.Body
                            className="text-center"
                            style={{ width: "150px", height: "150px" }}
                          >
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text></Card.Text>

                            <div className="container">
                              <div className="row">
                                <div className="col">
                                  {/* Shop Btn */}
                                  <Link
                                    to={"/customer/show_company/" + element.id}
                                  >
                                    <Button variant="outline-warning">
                                      <BsShop />
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
