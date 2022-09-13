// company/sales_summary
import React from 'react';

//bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//file
import CompanyNavbar from '../Components/CompanyNavbar';

//react icon
import { BiMoney } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";


export default function CompanySalesSummary() {
  return (
    <div>


      {/* Navbar */}
      <CompanyNavbar />

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
