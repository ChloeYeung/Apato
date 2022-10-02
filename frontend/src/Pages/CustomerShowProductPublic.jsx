// /customer/show_product
//bootstrap
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//file
import CustomerNavbar from '../Components/CustomerNavbar';
import cusShowProCarousel1 from '../images/cusShowProCarousel1.png';
import cusShowProCarousel2 from '../images/cusShowProCarousel2.png';
import cusShowProCarousel3 from '../images/cusShowProCarousel3.png';
//react icon
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
//state
import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { showProductThunk, addCartThunk } from "../redux/customer_showProductSlice";


export default function CustomerShowProduct() {
  const showproduct = useSelector((state) => state.showProductReducer.showproduct);
  console.log(showproduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showProductThunk());
  }, []);

  const handleAddCartBtn = (element) => {
    console.log(element);
    dispatch(addCartThunk(element));
    // document.getElementById(event.target.id).style.textDecoration = 'line-through'
  }

  return (
    <div>

      {/* Customer Navbar */}
      <CustomerNavbar />


      {/* Carousel */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 cusShowProCarousel"
            src={cusShowProCarousel1}
            alt="First slide"
            style={{maxHeight:"400px"}}
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
            style={{maxHeight:"400px"}}
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
            style={{maxHeight:"400px"}}
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
                    <Card  key={index+"showProductCard"}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                          {element.description}
                          <br />
                          ${element.price}
                        </Card.Text>
                        <>
                        </>
                        <Button variant="primary" onClick={()=>handleAddCartBtn(element)}>Add to cart <BsCartPlus /></Button>
                        <Button variant="primary">Description <HiOutlineInformationCircle /></Button>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              ))
          }

        </div>
      </div>

    </div>
  )
}