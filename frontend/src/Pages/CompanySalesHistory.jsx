// /company/sales_history
import React from "react";
//Bootstrap
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//file
import CompanyNavbar from "../Components/CompanyNavbar";
import cusNavNoPic from "../images/cusNavNoPic.jpg";
import { comNavInfoThunk } from "../redux/company_navbarSlice";
//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//react icon
import { FaEthereum } from "react-icons/fa";

export default function CompanySalesHistory() {
  const companynavinfo = useSelector(
    (state) => state.navbarComReducer.companynavinfo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comNavInfoThunk());
  });

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

      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="container">
              <div className="row">
                <div className="col-10">#1</div>
                <div className="col-2"> 09/09/2022</div>
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
                    <Form.Select aria-label="Default select example" size="sm">
                      <option value="Pending">Pending</option>
                      <option value="Comfirm">Comfirm</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipping">Shipping</option>
                      <option value="Finished">Finished</option>
                    </Form.Select>
                  </div>
                </div>
              </div>
              <br />

              {/* Customer info */}
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p className="text-secondary">Customer Infomation</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">Customer: Siri</div>
                  <div className="col">Phone no: 12345678</div>
                  <div className="col">Address: MK</div>
                </div>
              </div>
              <br />

              {/* Product & Service info */}
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p className="text-secondary">Product and Service</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">#P1</div>
                  <div className="col">Apple</div>
                  <div className="col">*5</div>
                  <div className="col">
                    0.15 <FaEthereum className="FaEthereumIcon" />
                  </div>
                </div>
              </div>
              <br />

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
                      0.75 <FaEthereum className="FaEthereumIcon" />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer:
            <br />
            Phone no.:
            <br />
            Address:
            <br />
            Product:
            <br />
            Status:
            <select name="languages" id="lang">
              <option value="javascript">Select a language</option>
              <option value="javascript">JavaScript</option>
              <option value="php">PHP</option>
              <option value="java">Java</option>
              <option value="golang">Golang</option>
              <option value="python">Python</option>
              <option value="c#">C#</option>
              <option value="C++">C++</option>
              <option value="erlang">Erlang</option>
            </select>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Status
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">done</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Accordion.Body>
        </Accordion.Item>

        {/* <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item> */}
      </Accordion>
    </div>
  );
}
