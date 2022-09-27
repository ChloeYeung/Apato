// company/sales_summary
import React from 'react';

//bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//file
import CompanyNavbar from '../Components/CompanyNavbar';
import cusNavNoPic from '../images/cusNavNoPic.jpg';
import { comNavInfoThunk } from "../redux/company_navbarSlice";

//react icon
import { BiMoney } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";

//state
import { useState, useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

export default function CompanySalesSummary() {
  const companynavinfo = useSelector((state) => state.navbarComReducer.companynavinfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comNavInfoThunk());
  });
  return (
    <div>

      {/* Navbar */}
      <CompanyNavbar
        companyImage={companynavinfo.image_data === null ? cusNavNoPic : `data:image/png;base64 ,${companynavinfo.image_data}`}
        companyName={companynavinfo.name} />

      {/* Summary card */}
      {/* <h1 className='text-center'>Sales Summary</h1> */}
      <br />
      <br />
      <div className='d-flex justify-content-center'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className='text-center'>Sales Summary</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center" id='comSalesSumWelcome'>Welcome company</Card.Subtitle>
            <hr />
            <Card.Text>
              Current sales: <BiMoney />
              <br />
              Total sales: <GiReceiveMoney />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
