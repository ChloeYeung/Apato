// /company/product_management
//file
import CompanyNavbar from '../Components/CompanyNavbar';
import CompanyProductManagementEdit from './CompanyProductManagementEdit';
//bootstrap
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
//react icon
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
//react-router-dom
import { Link, Outlet } from "react-router-dom";
//testing
import React, { useState, useEffect } from "react";
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

  const [editProduct, setEditProduct] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
    tag: "",
    type: "",
  });

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditProduct((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    console.log(editProduct);
  };

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
                  <td>
                    {element.type.split("")[0]}{element.id}
                  </td>

                  <td>
                    <input type="text" value={element.name} name="name" onChange={handleEditChange} />
                  </td>

                  <td>
                    <input type="text" value={element.description} name="description" onChange={handleEditChange} />
                  </td>

                  <td>
                    <input type="text" value={element.price} name="price" onChange={handleEditChange} />
                  </td>

                  <td>
                    <OverlayTrigger
                      trigger="click"
                      key={element.id}
                      overlay={
                        <Popover id={`popover-positioned-${element.id}`}>
                          <Popover.Header as="h3">{`Update quantity ${element.type.split("")[0]}${element.id}`}</Popover.Header>
                          <Popover.Body>
                            <input type="text" name="quantity" onChange={handleEditChange}/>
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                              <Button variant="outline-secondary" className='btn-sm'>Submit</Button>
                            </div>
                          </Popover.Body>
                        </Popover>
                      }>
                      <div>{element.quantity}</div>
                    </OverlayTrigger>
                  </td>
                  {/* 
                  <td>
                    <input type="text" value={element.tag} name="tag" onChange={handleEditChange} />
                    </td> */}

                  <td>
                    <OverlayTrigger
                      trigger="click"
                      key={element.id}
                      overlay={
                        <Popover id={`popover-positioned-${element.id}`}>
                          <Popover.Header as="h3">{`Update Tag ${element.type.split("")[0]}${element.id}`}</Popover.Header>
                          <Popover.Body>
                            <input type="text" name="tag" onChange={handleEditChange}/>
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                              <Button variant="outline-secondary" className='btn-sm'>Submit</Button>
                            </div>
                          </Popover.Body>
                        </Popover>
                      }>
                      <div>{element.tag}</div>
                    </OverlayTrigger>
                  </td>

                  <td>
                    image
                  </td>
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
