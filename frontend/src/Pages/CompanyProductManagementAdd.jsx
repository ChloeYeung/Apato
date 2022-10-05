// /company/product_management/add

//bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";

//react icon
import { TiTickOutline } from "react-icons/ti";
import { TiTick } from "react-icons/ti";

//file
import { showpmThunk, addpmThunk } from "../redux/company_pmSlice";

//state
import { useState, useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//jquery
import $ from "jquery";
//react select
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';

export default function CompanyProductManagementAdd() {
  const dispatch = useDispatch();

  const [addProduct, setAddProduct] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    tag: "",
    type: "",
    image: "",
  });

  const handleAddChange = (event) => {
    const { name, value } = event.target;
    setAddProduct((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    console.log(addProduct);
  };

  // Hide card
  const [showCard, setShowCard] = useState(false);

  const handlepmAddOnClickHide = () => {
    console.log("hide");
    document.getElementById("pmAddHideCard").style.visibility = "hidden";
  };

  //react select
 

  return (
    <div id="pmAddHideCard">
      <div className="d-flex justify-content-center">
        <Card style={{ width: "35rem" }} className="text-center">
          <Card.Body>
            <Form id="pmAddForm">
              <Card.Title>
                <div className="container">
                  <div className="row">
                  <div className="col-4"> </div>
                    <div className="col-4"> Add Product</div>
                    <div className="col-3"> </div>
                    <div className="col-1">
                      <CloseButton onClick={handlepmAddOnClickHide} />
                    </div>
                  </div>
                </div>

                {/* Add Product <CloseButton onClick={handlepmAddOnClickHide} />{" "} */}
              </Card.Title>

              <div className="row">
                <label>Name: </label>
                <input
                  type="text"
                  placeholder="Tesla"
                  name="name"
                  id="pmAddFormName"
                  onChange={handleAddChange}
                  className="addPmInput"
                />
              </div>
              <br />

              <div className="row">
                <label>Description: </label>
                <input
                  type="text"
                  placeholder="electric cars and SUVs"
                  name="description"
                  id="pmAddFormdescription"
                  onChange={handleAddChange}
                  className="addPmInput"
                />
              </div>
              <br />

              <div className="row">
                <label>Price: </label>
                <input
                  type="number"
                  placeholder="0.19"
                  name="price"
                  onChange={handleAddChange}
                  id="pmAddFormPrice"
                  className="addPmInput"
                />
              </div>
              <br />

              <div className="row">
                <label>Stock: </label>
                <input
                  type="number"
                  placeholder="2"
                  name="stock"
                  onChange={handleAddChange}
                  id="pmAddFormStock"
                  className="addPmInput"
                />
              </div>
              <br />

              <div className="row">
                <label>Tag: </label>
                <input
                  type="text"
                  placeholder="car"
                  name="tag"
                  onChange={handleAddChange}
                  id="pmAddFormTag"
                  className="addPmInput"
                />
              </div>

          
              <br />

              <div className="row">
                <label>Type: </label>
                <Form.Select
                  onChange={handleAddChange}
                  name="type"
                  id="pmAddFormType"
                  className="addPmInput"
                >
                  <option>Product / Service</option>
                  <option value="Product">Product</option>
                  <option value="Service">Service</option>
                </Form.Select>
              </div>
              <br />

              <div className="row">
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label>Image:</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    id="pmAddFormImage"
                    name="image"
                  />
                </Form.Group>
              </div>

              {/* <div className="row">
                <label>Image: </label>
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  id="pmAddFormImage"
                  name="image"
                />
              </div> */}

              <Button
                onClick={() => dispatch(addpmThunk(addProduct))}
                variant="outline-secondary"
              >
                <TiTickOutline />
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
