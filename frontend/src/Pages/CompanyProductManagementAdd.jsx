// /company/product_management/add

//bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

//react icon
import { TiTickOutline } from "react-icons/ti";
import { TiTick } from "react-icons/ti";

//file
import { showpmThunk, addpmThunk } from "../redux/company_pmSlice";

//state
import { useState, useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';


export default function CompanyProductManagementAdd() {
    const dispatch = useDispatch();

    const [addProduct, setAddProduct] = useState({
        name: "",
        description: "",
        quantity: "",
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

    return (
        <div>

            <div className='d-flex justify-content-center'>
                <Card style={{ width: '25rem' }} className="text-center">
                    <Card.Body>
                        <Form id="pmAddForm">
                            <Card.Title>Add Product</Card.Title>

                            <div className='row'>
                                <label>Name: </label>
                                <input type="text" placeholder='Tesla' name="name" id="pmAddFormName" onChange={handleAddChange} className="addPmInput" />
                            </div>
                            <br />

                            <div className='row'>
                                <label >Description: </label>
                                <input type="text" placeholder='electric cars and SUVs' name="description" id="pmAddFormdescription" onChange={handleAddChange} className="addPmInput" />
                            </div>
                            <br />

                            <div className='row'>
                                <label >Price: </label>
                                <input type="number" placeholder='367100' name="price" onChange={handleAddChange} id="pmAddFormPrice" className="addPmInput" />
                            </div>
                            <br />

                            <div className='row'>
                                <label >Quantity: </label>
                                <input type="number" placeholder='2' name="quantity" onChange={handleAddChange} id="pmAddFormQuantity" className="addPmInput" />
                            </div>
                            <br />

                            <div className='row'>
                                <label >Tag: </label>
                                <input type="text" placeholder='car' name="tag" onChange={handleAddChange} id="pmAddFormTag" className="addPmInput" />
                            </div>
                            <br />

                            <div className='row'>
                                <label>Type: </label>
                                <Form.Select onChange={handleAddChange} name="type" id="pmAddFormType" className="addPmInput">
                                    <option >Product / Service</option>
                                    <option value="Product" >Product</option>
                                    <option value="Service" >Service</option>
                                </Form.Select>
                            </div>
                            <br />

                            {/* <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group> */}

                            <div className='row'>
                                <label >Image: </label>
                                <input type="file" accept='image/png, image/gif, image/jpeg' id="pmAddFormImage" name="image" />
                            </div>
                            <br />

                            <Button onClick={() => dispatch(addpmThunk(addProduct))} variant="dark"><TiTickOutline /></Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div >
    )
}
