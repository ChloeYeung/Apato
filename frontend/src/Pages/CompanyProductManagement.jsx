// /company/product_management
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
//testing
import React, { useEffect } from "react";
import { showpmThunk, addpmThunk, deletepmThunk } from "../redux/company_pmSlice";
//redux
import { useDispatch, useSelector } from "react-redux";



export default function CompanyProductManagement() {
  const showpm = useSelector((state) => state.pmReducer.showpm);
  console.log(showpm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showpmThunk());
  }, [addpmThunk]);

  const handleDelBtnChange = (id) => {
    console.log("in handleDelBtnChange")
    console.log(id);
    dispatch(deletepmThunk({ id: id }));
    // document.getElementById(event.target.id).style.textDecoration = 'line-through'
  }

  return (
    <div>

      {/* Navbar */}
      <CompanyNavbar />

      {/* table */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Tag</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {showpm && showpm
            .map((element, index) => (
              <>
                <tr key={index}>
                  <td>{element.type.split("")[0]}{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.description}</td>
                  <td>{element.price}</td>
                  <td>{element.quantity}</td>
                  <td>{element.tag}</td>
                  <td> </td>
                  <td>
                    <Link to="/company/product_management/edit">
                      <Button variant='light'><AiOutlineEdit /></Button>
                    </Link>
                  </td>
                  <td>
                    <Button variant='light' onClick={() => handleDelBtnChange(element.id)}><IoTrashOutline className={"pmDel" + element.id} /></Button>
                  </td>
                </tr>
              </>
            ))
          }
        </tbody>
      </Table>

      {/* add button */}
      <div className='d-flex justify-content-center'>
        <Link to="/company/product_management/add">
          <Button variant="dark" style={{ zIndex: "1000" }}>Add <IoMdAdd /></Button>
        </Link>
      </div>

      <br />
      <Outlet className='d-flex justify-content-center' />

    </div >
  )
}
