// /company/product_management
//file
import CompanyNavbar from '../Components/CompanyNavbar';
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
//state
import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { showpmThunk, addpmThunk, deletepmThunk, editpmThunk } from "../redux/company_pmSlice";
//jquery
import $ from 'jquery';


export default function CompanyProductManagement() {
  const showpm = useSelector((state) => state.pmReducer.showpm);
  const imagepm = useSelector((state) => state.pmReducer.imagepm);
  console.log(showpm);
  console.log(imagepm)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showpmThunk());
  }, [addpmThunk]);

  const handleDelBtnChange = (id) => {
    console.log(id);
    dispatch(deletepmThunk({ id: id }));
    // document.getElementById(event.target.id).style.textDecoration = 'line-through'
  }

  const [editProduct, setEditProduct] = useState("");

  const handleEditChange = (event) => {
    setEditProduct(event.target.value);
  };

  const handleEditBtnChange = (id, column) => {
    let send = { id: id, column: column, value: editProduct }
    console.log(send);
    dispatch(editpmThunk(send));
    $(`#pmEditClosePopover${id}${column}`).hide();
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
                  <td>
                    {element.type.split("")[0]}{element.id}
                  </td>

                  <td>
                    <OverlayTrigger
                      trigger="click"
                      key={element.id}
                      placement="bottom"
                      overlay={
                        <Popover id={"pmEditClosePopover" + element.id + "name"}>
                          <Popover.Header style={{ backgroundColor: "black", color: "white" }} as="h3">{`Update Name ${element.type.split("")[0]}${element.id}`}</Popover.Header>
                          <Popover.Body>
                            <input type="text" name="name" placeholder='name' id='pmEditInput' onChange={handleEditChange} />
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                              <Button variant="outline-secondary" onClick={() => handleEditBtnChange(element.id, "name")} className='btn-sm'>Submit</Button>
                            </div>
                          </Popover.Body>
                        </Popover>
                      }>
                      <div>{element.name}</div>
                    </OverlayTrigger>
                  </td>

                  <td>
                    <OverlayTrigger
                      trigger="click"
                      key={element.id}
                      placement="bottom"
                      overlay={
                        <Popover id={"pmEditClosePopover" + element.id + "description"}>
                          <Popover.Header style={{ backgroundColor: "black", color: "white" }} as="h3">{`Update Description ${element.type.split("")[0]}${element.id}`}</Popover.Header>
                          <Popover.Body>
                            <input type="text" name="description" placeholder='description' id='pmEditInput' onChange={handleEditChange} />
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                              <Button variant="outline-secondary" onClick={() => handleEditBtnChange(element.id, "description")} className='btn-sm'>Submit</Button>
                            </div>
                          </Popover.Body>
                        </Popover>
                      }>
                      <div>{element.description}</div>
                    </OverlayTrigger>
                  </td>

                  <td>
                    <OverlayTrigger
                      trigger="click"
                      key={element.id}
                      placement="bottom"
                      overlay={
                        <Popover id={"pmEditClosePopover" + element.id + "price"}>
                          <Popover.Header style={{ backgroundColor: "black", color: "white" }} as="h3">{`Update Price ${element.type.split("")[0]}${element.id}`}</Popover.Header>
                          <Popover.Body>
                            <input type="number" name="price" placeholder='price' id='pmEditInput' onChange={handleEditChange} />
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                              <Button variant="outline-secondary" onClick={() => handleEditBtnChange(element.id, "price")} className='btn-sm'>Submit</Button>
                            </div>
                          </Popover.Body>
                        </Popover>
                      }>
                      <div>{element.price}</div>
                    </OverlayTrigger>
                  </td>

                  <td>
                    <OverlayTrigger
                      trigger="click"
                      key={element.id}
                      placement="bottom"
                      overlay={
                        <Popover id={"pmEditClosePopover" + element.id + "quantity"}>
                          <Popover.Header style={{ backgroundColor: "black", color: "white" }} as="h3">{`Update Quantity ${element.type.split("")[0]}${element.id}`}</Popover.Header>
                          <Popover.Body>
                            <input type="number" name="quantity" placeholder='quantity' id='pmEditInput' onChange={handleEditChange} />
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                              <Button variant="outline-secondary" onClick={() => handleEditBtnChange(element.id, "quantity")} className='btn-sm'>Submit</Button>
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
                      placement="bottom"
                      overlay={
                        <Popover id={"pmEditClosePopover" + element.id + "tag"}>
                          <Popover.Header style={{ backgroundColor: "black", color: "white" }} as="h3">{`Update Tag ${element.type.split("")[0]}${element.id}`}</Popover.Header>
                          <Popover.Body>
                            <input type="text" name="tag" placeholder='tag' id='pmEditInput' onChange={handleEditChange} />
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                              <Button variant="outline-secondary" onClick={() => handleEditBtnChange(element.id, "tag")} className='btn-sm'>Submit</Button>
                            </div>
                          </Popover.Body>
                        </Popover>
                      }>
                      <div>{element.tag}</div>
                    </OverlayTrigger>
                  </td>

                  <td>
                    {/* {element.image_data} */}
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
