// /company/product_management
//file
import CompanyNavbar from "../Components/CompanyNavbar";
import cusNavNoPic from "../images/cusNavNoPic.jpg";
import { comNavInfoThunk } from "../redux/company_navbarSlice";
import DRInteresting from "../images/database/DRInteresting.jpg";
import PirceOfFruit from "../images/database/PirceOfFruit.jpg";
import pearEvent from "../images/database/pearEvent.jpg";
import blackberryEvent from "../images/database/blackberryEvent.jpg";
import dance from "../images/database/dance.jpg";
import mkt from "../images/database/mkt.jpg";
import music from "../images/database/music.jpg";
import Strawberry from "../images/database/Strawberry.jpg";
import Apple from "../images/database/Apple.jpg";
//bootstrap
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
//react icon
import { IoTrashOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
//react-router-dom
import { Link, Outlet } from "react-router-dom";
//state
import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  showpmThunk,
  addpmThunk,
  deletepmThunk,
  editpmThunk,
} from "../redux/company_pmSlice";
//jquery
import $ from "jquery";

export default function CompanyProductManagement() {
  const showpm = useSelector((state) => state.pmReducer.showpm);
  const companyinfopm = useSelector((state) => state.pmReducer.companyinfopm);
  const companynavinfo = useSelector(
    (state) => state.navbarComReducer.companynavinfo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showpmThunk());
    dispatch(comNavInfoThunk());
  }, [addpmThunk]);

  const handleDelBtnChange = (id) => {
    console.log(id);
    dispatch(deletepmThunk({ id: id }));
  };

  const [editProduct, setEditProduct] = useState("");

  const handleEditChange = (event) => {
    setEditProduct(event.target.value);
  };

  const handleEditBtnChange = (id, column) => {
    let send = { id: id, column: column, value: editProduct };
    console.log(send);
    dispatch(editpmThunk(send));
    $(`#pmEditClosePopover${id}${column}`).hide();
  };

  //show add card
  const handlepmAddOnClickShow = () => {
    console.log("hide");
    document.getElementById("pmAddHideCard").style.visibility = "visible";
  };

  return (
    <div className="fontNormal">
      {/* Navbar */}
      <CompanyNavbar
        companyImage={
          companynavinfo.name == "Piece Of Fruit Limited" ? 
          PirceOfFruit :
          companynavinfo.name == "Doctor Interesting Limited" ? 
          PirceOfFruit :
          companynavinfo.image_data === null
            ? cusNavNoPic
            : `data:image/png;base64 ,${companynavinfo.image_data}`
        }
        companyName={companynavinfo.name}
      />
      <br />

      {/* table */}
      <div className="container">
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Tag</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {showpm &&
              showpm.map((element, index) => (
                <>
                  <tr key={index}>
                    <td>
                      {element.type.split("")[0]}
                      {element.id}
                    </td>

                    <td>
                      <OverlayTrigger
                        trigger="click"
                        key={element.id}
                        placement="bottom"
                        overlay={
                          <Popover
                            id={"pmEditClosePopover" + element.id + "name"}
                          >
                            <Popover.Header
                              className="text-center"
                              as="h3"
                            >{`Update Name ${element.type.split("")[0]}${
                              element.id
                            }`}</Popover.Header>
                            <Popover.Body>
                              <input
                                type="text"
                                name="name"
                                placeholder="name"
                                id="pmEditInput"
                                onChange={handleEditChange}
                              />
                              <br />
                              <br />
                              <div className="d-flex justify-content-center">
                                <Button
                                  variant="outline-secondary"
                                  onClick={() =>
                                    handleEditBtnChange(element.id, "name")
                                  }
                                  className="btn-sm"
                                >
                                  Submit
                                </Button>
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <div>{element.name}</div>
                      </OverlayTrigger>
                    </td>

                    <td>
                      <OverlayTrigger
                        trigger="click"
                        key={element.id}
                        placement="bottom"
                        overlay={
                          <Popover
                            id={
                              "pmEditClosePopover" + element.id + "description"
                            }
                          >
                            <Popover.Header
                              className="text-center"
                              as="h3"
                            >{`Update Description ${element.type.split("")[0]}${
                              element.id
                            }`}</Popover.Header>
                            <Popover.Body>
                              <input
                                type="text"
                                name="description"
                                placeholder="description"
                                id="pmEditInput"
                                onChange={handleEditChange}
                              />
                              <br />
                              <br />
                              <div className="d-flex justify-content-center">
                                <Button
                                  variant="outline-secondary"
                                  onClick={() =>
                                    handleEditBtnChange(
                                      element.id,
                                      "description"
                                    )
                                  }
                                  className="btn-sm"
                                >
                                  Submit
                                </Button>
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <div>{element.description}</div>
                      </OverlayTrigger>
                    </td>

                    <td>
                      <OverlayTrigger
                        trigger="click"
                        key={element.id}
                        placement="bottom"
                        overlay={
                          <Popover
                            id={"pmEditClosePopover" + element.id + "price"}
                          >
                            <Popover.Header
                              className="text-center"
                              as="h3"
                            >{`Update Price ${element.type.split("")[0]}${
                              element.id
                            }`}</Popover.Header>
                            <Popover.Body>
                              <input
                                type="number"
                                name="price"
                                placeholder="price"
                                id="pmEditInput"
                                onChange={handleEditChange}
                              />
                              <br />
                              <br />
                              <div className="d-flex justify-content-center">
                                <Button
                                  variant="outline-secondary"
                                  onClick={() =>
                                    handleEditBtnChange(element.id, "price")
                                  }
                                  className="btn-sm"
                                >
                                  Submit
                                </Button>
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <div>{element.price}</div>
                      </OverlayTrigger>
                    </td>

                    <td>
                      <OverlayTrigger
                        trigger="click"
                        key={element.id}
                        placement="bottom"
                        overlay={
                          <Popover
                            id={"pmEditClosePopover" + element.id + "stock"}
                          >
                            <Popover.Header
                              className="text-center"
                              as="h3"
                            >{`Update stock ${element.type.split("")[0]}${
                              element.id
                            }`}</Popover.Header>
                            <Popover.Body>
                              <input
                                type="number"
                                name="stock"
                                placeholder="stock"
                                id="pmEditInput"
                                onChange={handleEditChange}
                              />
                              <br />
                              <br />
                              <div className="d-flex justify-content-center">
                                <Button
                                  variant="outline-secondary"
                                  onClick={() =>
                                    handleEditBtnChange(element.id, "stock")
                                  }
                                  className="btn-sm"
                                >
                                  Submit
                                </Button>
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <div>{element.stock}</div>
                      </OverlayTrigger>
                    </td>

                    <td>
                      <OverlayTrigger
                        trigger="click"
                        key={element.id}
                        placement="bottom"
                        overlay={
                          <Popover
                            id={"pmEditClosePopover" + element.id + "tag"}
                          >
                            <Popover.Header
                              className="text-center testing"
                              as="h3"
                            >{`Update Tag ${element.type.split("")[0]}${
                              element.id
                            }`}</Popover.Header>
                            <Popover.Body className="bg-light">
                              <input
                                type="text"
                                name="tag"
                                placeholder="tag"
                                id="pmEditInput"
                                onChange={handleEditChange}
                              />
                              <br />
                              <br />
                              <div className="d-flex justify-content-center">
                                <Button
                                  variant="outline-secondary"
                                  onClick={() =>
                                    handleEditBtnChange(element.id, "tag")
                                  }
                                  className="btn-sm"
                                >
                                  Submit
                                </Button>
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <div>{element.tag}</div>
                      </OverlayTrigger>
                    </td>

                    <td>

{element.name === "Apple" ?
<img
style={{ width: "150px", height: "150px" }}
src={Apple}
/> :
element.name === "Strawberry" ?
<img
style={{ width: "150px", height: "150px" }}
src={Strawberry}
/> :
element.name === "Picking Pear Event" ?
<img
style={{ width: "150px", height: "150px" }}
src={pearEvent}
/> :
element.name === "Picking Blackberry Event" ?
<img
style={{ width: "150px", height: "150px" }}
src={blackberryEvent}
/> :
element.name === "Marketing Consultation" ?
<img
style={{ width: "150px", height: "150px" }}
src={mkt}
/> :
element.name === "Piano Tutorial" ?
<img
style={{ width: "150px", height: "150px" }}
src={music}
/> :
element.name === "Ballet Tutorial" ?
<img
style={{ width: "150px", height: "150px" }}
src={dance}
/> :


<img
style={{ width: "150px", height: "150px" }}
src={`data:image/png;base64 ,${element.image_data}`}
/>
}

                      {/* <img
                        style={{ width: "150px", height: "150px" }}
                        src={`data:image/png;base64 ,${element.image_data}`}
                      /> */}
                    </td>

                    <td>
                      <Button
                        variant="light"
                        onClick={() => handleDelBtnChange(element.id)}
                      >
                        <IoTrashOutline className={"pmDel" + element.id} />
                      </Button>
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </Table>
      </div>

      {/* add button */}
      <div className="d-flex justify-content-center">
        <Link to="/company/product_management/add">
          <Button
            variant="outline-secondary"
            style={{ zIndex: "1000" }}
            onClick={handlepmAddOnClickShow}
          >
            Add <IoMdAdd />
          </Button>
        </Link>
      </div>

      <br />
      <Outlet className="d-flex justify-content-center" />
    </div>
  );
}
