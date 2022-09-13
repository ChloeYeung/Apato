// /company/product_management
import React from 'react';

//file
import CompanyNavbar from '../Components/CompanyNavbar';

//bootstrap
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


//react icon
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

//react-router-dom
import { Link, Outlet } from "react-router-dom";


export default function CompanyProductManagement() {
  return (
    <div>
      <CompanyNavbar />

      {/* table */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Apple</td>
            <td>Sweet and Tasty</td>
            <td>apple.jpg</td>
            <td>5</td>
            <td>$6</td>
            <td><Button variant='light'><IoTrashOutline /></Button></td>
            <td>
            <Link to="/company/product_management/edit">
              <Button variant='light'><AiOutlineEdit /></Button>
            </Link>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* add button */}
      <div className='d-flex justify-content-center'>
        <Link to="/company/product_management/add">
          <Button variant="dark">Add <IoMdAdd />  </Button>
        </Link>
      </div>
      <br />
      <Outlet className='d-flex justify-content-center'/>
    </div >
  )
}
