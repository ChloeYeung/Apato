//react
import React from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
//react-router-dom
import { Link, NavLink } from "react-router-dom";
//file
import comNavNoPic from "../images/comNavNoPic.jpg";
import cusNavNoPic from "../images/cusNavNoPic.jpg";
import aboutUsContractUs from "../images/aboutUsContractUs.png";
import aboutUsOurStory from "../images/aboutUsOurStory.png";
//react icon
import { AiOutlineShopping, AiOutlineMail } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";

export default function AboutUs() {
  return (
    <div className="fontNormal">
      {/* navBar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Apato
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#aboutUsOurStory">Our Story</Nav.Link>
              <Nav.Link href="#aboutUsCustomer">Customer</Nav.Link>
              <Nav.Link href="#aboutUsCompany">Company</Nav.Link>
              <Nav.Link href="#aboutUsContactUs">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content */}
      <br />
      <div id="aboutUsOurStory">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-6 d-flex align-items-center">
              <h5>Our <br /> Story</h5> &nbsp;
              <p>
              Apatosaurus + Cypto = ApaTo,
              Payment with MetaMask Ethereum
              </p>
            </div>
            <div className="col-2">
              <img src={aboutUsOurStory} className="aboutUsImgOurStory" />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div id="aboutUsCustomer">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-6">
              <img src={comNavNoPic} className="aboutUsImgCus" />
            </div>
            <div className="col-4 d-flex align-items-center">
              <h5>Customer Experience </h5>
              <p>Luck Draw, covering Product {"&"} Service</p>
              <Link style={{ margin: "5px" }} to="/customer/show_product">
                <Button variant="outline-warning">
                  <AiOutlineShopping />
                </Button>
              </Link>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div id="aboutUsCompany">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-6 d-flex align-items-center">
              <h5>Company Experience</h5>
              <p>
                Productment Management, Order Management, Track for Order
                History
              </p>
              <Link style={{ margin: "5px" }} to="/company/product_management">
                <Button variant="outline-success">
                  <MdWorkOutline />
                </Button>
              </Link>
            </div>
            <div className="col-4">
              <img src={cusNavNoPic} className="aboutUsImgCom" />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div id="aboutUsContactUs">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-6">
              <img src={aboutUsContractUs} className="aboutUsImgContactUs" />
            </div>
            <div className="col-4 d-flex align-items-center">
              <h5>Get In &nbsp; Touch </h5>

              <p>
                We would love to hear from you &nbsp;
                <a href="mailto: apatonet.gmail.com">apatonet.gmail.com </a>
              </p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
