// /customer/show_product
//bootstrap
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
//file
import CustomerNavbar from '../Components/CustomerNavbar';
import cusShowProCarousel1 from '../images/cusShowProCarousel1.jpg';
import cusShowProCarousel2 from '../images/cusShowProCarousel2.png';
import cusShowProCarousel3 from '../images/cusShowProCarousel3.png';
//react icon
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BiCheckCircle } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";

//state
import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { showProductThunk, addCartThunk } from "../redux/customer_showProductSlice";


export default function CustomerShowProduct() {
  const showproduct = useSelector((state) => state.showProductReducer.showproduct);
  console.log(showproduct);

  const addcartmessage = useSelector((state) => state.showProductReducer.addcartmessage);
  console.log(addcartmessage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showProductThunk());
  }, []);

  const handleAddCartBtn = (element) => {
    console.log(element);
    dispatch(addCartThunk(element));
    setShow(true);
    // document.getElementById(event.target.id).style.textDecoration = 'line-through'
  }


  //  for the toast notice
  const [show, setShow] = useState(false);


  return (
    <>
      <div id="cusShowProductContainer">


        <div id="cusShowProductBottomLayer">

          {/* Customer Navbar */}
          <CustomerNavbar />



          <div id="cusShowProductTopLayer" className='container'  >
            <div className="d-flex flex-nowrap"  >

              {/* Toast notice*/}
              <Row >
                <Col xs={6}>
                  <Toast id="toastNoticeShowProduct" className="d-flex justify-content-center align-items-center text-center" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body >
                      <p id="addcartmessage"> {addcartmessage}  </p>
                      <br />
                      {(addcartmessage == "No stock remain") ?
                        (<FiAlertCircle className='addcarticon' />) : (<BiCheckCircle className='addcarticon' />)}
                    </Toast.Body>
                  </Toast>
                </Col>
                <Col xs={6}>
                </Col>
              </Row>
            </div>
          </div>

          {/* Carousel */}
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 cusShowProCarousel"
                src={cusShowProCarousel1}
                alt="First slide"
                style={{ maxHeight: "400px" }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 cusShowProCarousel"
                src={cusShowProCarousel3}
                alt="Second slide"
                style={{ maxHeight: "400px" }}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 cusShowProCarousel"
                src={cusShowProCarousel2}
                alt="Third slide"
                style={{ maxHeight: "400px" }}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


          {/* Product card */}
          <div className='container'>
            <div className='row'>
              {
                showproduct && showproduct
                  .map((element, index) => (
                    <>
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <Card key={index + "showProductCard"} className="d-flex align-items-center justify-content-center">
                          <img style={{ width: "150px", height: "150px" }} src={`data:image/png;base64 ,${element.image_data}`} />
                          <Card.Body className="text-center">
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text>
                              {element.description}
                              <br />
                              ${element.price}
                            </Card.Text>
                            <>
                            </>

                            {/* Add cart btn */}
                            <Button id="showProductAddCartBtn" onClick={() => handleAddCartBtn(element)}> <BsCartPlus /></Button>

                            {/* Descrition Btn */}
                            <Button variant="primary"> <HiOutlineInformationCircle /></Button>
                          </Card.Body>
                        </Card>
                      </div>
                    </>
                  ))
              }
            </div>
          </div>

        </div>

      </div>
    </>
  )
}