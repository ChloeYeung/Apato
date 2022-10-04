// /company/sales_history
import React from "react";
//Bootstrap
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//file
import CompanyNavbar from "../Components/CompanyNavbar";
import cusNavNoPic from "../images/cusNavNoPic.jpg";
import { comNavInfoThunk } from "../redux/company_navbarSlice";
import {
  showSalesHistoryThunk,
  editSalesHistoryStatusThunk,
} from "../redux/company_historySlice";
//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//react icon
import { FaEthereum } from "react-icons/fa";
//react select
import Select from "react-select";

export default function CompanySalesHistory() {
  const companynavinfo = useSelector(
    (state) => state.navbarComReducer.companynavinfo
  );

  const showsaleshistory = useSelector(
    (state) => state.salesHistoryReducer.showsaleshistory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comNavInfoThunk());
    dispatch(showSalesHistoryThunk());
  });

  //  Handle History Total
  let handlecomHistoryTotal = function (element) {
    let totalPrice = 0;
    element[1].forEach((e) => {
      totalPrice += e.unit * e.price;
    });
    return totalPrice;
  };

  const options = [
    { value: "Pending", label: "Pending" },
    { value: "Comfirm", label: "Comfirm" },
    { value: "Packing", label: "Packing" },
    { value: "Shipping", label: "Shipping" },
    { value: "Finished", label: "Finished" },
  ];

  //selected default
  let [selectDefault, setSelectDefault] = useState("");

  let handleSelectComHistoryChange = function (orderId, selectedOption) {
    // console.log(selectedOption);
    setSelectDefault(selectedOption.value);
    let sendObject = {};
    sendObject.orderId = orderId;
    sendObject.newStatus = selectedOption.value;
    console.log(sendObject);
    dispatch(editSalesHistoryStatusThunk(sendObject));
  };

  return (
    <div>
      {/* Navbar */}
      <CompanyNavbar
        companyImage={
          companynavinfo.image_data === null
            ? cusNavNoPic
            : `data:image/png;base64 ,${companynavinfo.image_data}`
        }
        companyName={companynavinfo.name}
      />

      {showsaleshistory &&
        Object.entries(showsaleshistory).map((element, index) => {
          return (
            <>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="container">
                      <div className="row">
                        <div className="col-10">#{element[0]}</div>
                        <div className="col-2"> {element[1][0].date}</div>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div style={{ minWidth: "30rem" }}>
                      {/* Status */}
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <p className="text-secondary">Status</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            {/* {element[1][0].status == "Pending" ? (
                              <div>
                                <Form.Select size="sm">
                                  <option value="Pending" selected="selected">
                                    Pending
                                  </option>
                                  <option value="Comfirm">Comfirm</option>
                                  <option value="Packing">Packing</option>
                                  <option value="Shipping">Shipping</option>
                                  <option value="Finished">Finished</option>
                                </Form.Select>
                              </div>
                            ) : element[1][0].status == "Comfirm" ? (
                              <div>
                                <Form.Select size="sm">
                                  <option value="Pending">Pending</option>
                                  <option value="Comfirm" selected="selected">
                                    Comfirm
                                  </option>
                                  <option value="Packing">Packing</option>
                                  <option value="Shipping">Shipping</option>
                                  <option value="Finished">Finished</option>
                                </Form.Select>
                              </div>
                            ) : element[1][0].status == "Packing" ? (
                              <div>
                                <Form.Select size="sm">
                                  <option value="Pending">Pending</option>
                                  <option value="Comfirm">Comfirm</option>
                                  <option value="Packing" selected="selected">
                                    Packing
                                  </option>
                                  <option value="Shipping">Shipping</option>
                                  <option value="Finished">Finished</option>
                                </Form.Select>
                              </div>
                            ) : element[1][0].status == "Shipping" ? (
                              <div>
                                <Form.Select size="sm">
                                  <option value="Pending">Pending</option>
                                  <option value="Comfirm">Comfirm</option>
                                  <option value="Packing">Packing</option>
                                  <option value="Shipping" selected="selected">
                                    Shipping
                                  </option>
                                  <option value="Finished">Finished</option>
                                </Form.Select>
                              </div>
                            ) : (
                              <div>
                                <Form.Select size="sm">
                                  <option value="Pending">Pending</option>
                                  <option value="Comfirm">Comfirm</option>
                                  <option value="Packing">Packing</option>
                                  <option value="Shipping">Shipping</option>
                                  <option value="Finished" selected="selected">
                                    Finished
                                  </option>
                                </Form.Select>
                              </div>
                            )} */}

                            {/* <Form.Select size="sm">
                              <option value="Pending">Pending</option>
                              <option value="Comfirm">Comfirm</option>
                              <option value="Packing">Packing</option>
                              <option value="Shipping">Shipping</option>
                              <option value="Finished">Finished</option>
                            </Form.Select> */}

                            <Select
                              options={options}
                              onChange={(e) =>
                                handleSelectComHistoryChange(element[0], e)
                              }
                              value={options.find(function (option) {
                                return option.value === element[1][0].status;
                              })}
                            />
                          </div>
                        </div>
                      </div>
                      <br />

                      {/* Customer info */}
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <p className="text-secondary">
                              Customer Infomation
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            Customer: {element[1][0].name}
                          </div>
                          <div className="col">
                            Phone no: {element[1][0].phone_no}
                          </div>
                          <div className="col">
                            Address: {element[1][0].address}
                          </div>
                        </div>
                      </div>
                      <br />

                      {/* Product & Service info */}

                      {element[1] &&
                        element[1].map((element2) => (
                          <>
                            <div className="container">
                              <div className="row">
                                <div className="col">
                                  <p className="text-secondary">
                                    Product and Service
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  #{element2.type.split("")[0]}
                                  {element2.product_id}
                                </div>
                                <div className="col">
                                  {element2.product_name}
                                </div>
                                <div className="col">*{element2.unit}</div>
                                <div className="col">
                                  {element2.unit * element2.price}{" "}
                                  <FaEthereum className="FaEthereumIcon" />
                                </div>
                              </div>
                            </div>
                            <br />
                          </>
                        ))}
                      {/* Order Total */}
                      <div className="container">
                        <div className="row">
                          <div className="col-3">
                            <p>{""} </p>
                          </div>
                          <div className="col-3">
                            <p>{""} </p>
                          </div>
                          <div className="col-3">
                            <p>{""} </p>
                          </div>
                          <div className="col-3">
                            <p>
                              <span>
                                {handlecomHistoryTotal(element)}
                                <FaEthereum className="FaEthereumIcon" />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </>
          );
        })}
    </div>
  );
}
