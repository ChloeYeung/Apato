// /customer/show_service
//bootstrap
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
//file
import CustomerNavbar from '../Components/CustomerNavbar';
import cusShowSerCarousel1 from '../images/cusShowSerCarousel1.jpg';
import cusShowSerCarousel2 from '../images/cusShowSerCarousel2.jpg';
import cusShowSerCarousel3 from '../images/cusShowSerCarousel3.jpg';
//react icon
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BiCheckCircle } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";

//state
import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { showServiceThunk, addCartSerThunk } from "../redux/customer_showServiceSlice";


export default function CustomerShowService() {
  const showservice = useSelector((state) => state.showServiceReducer.showservice);
  console.log(showservice);

  const addcartmessageser = useSelector((state) => state.showServiceReducer.addcartmessageser);
  console.log(addcartmessageser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showServiceThunk());
  }, []);

  const handleAddCartBtn = (element) => {
    console.log(element);
    dispatch(addCartSerThunk(element));
    setShowSer(true);
    // document.getElementById(event.target.id).style.textDecoration = 'line-through'
  }


  //  for the toast notice
  const [showSer, setShowSer] = useState(false);


  return (
    <>
      <div id="cusShowServiceContainer">


        <div id="cusShowServiceBottomLayer">

          {/* Customer Navbar */}
          <CustomerNavbar />



          <div id="cusShowServiceTopLayer" className='container'  >
            <div className="d-flex flex-nowrap" >

              {/* Toast notice*/}
              <Row >
                <Col xs={6}>
                  <Toast id="toastNoticeShowService" className="d-flex justify-content-center align-items-center text-center" onClose={() => setShowSer(false)} show={showSer} delay={3000} autohide>
                    <Toast.Body >
                      <p id="addcartmessageser"> {addcartmessageser}  </p>
                      <br />
                      {(addcartmessageser == "No stock remain") ?
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
                src={cusShowSerCarousel1}
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
                src={cusShowSerCarousel3}
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
                src={cusShowSerCarousel2}
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
                showservice && showservice
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


                            <Button id="showServiceAddCartBtn" onClick={() => handleAddCartBtn(element)}> <BsCartPlus /></Button>


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