// /company/product_management/edit

//bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
//react icon
import { TiTick } from "react-icons/ti";
//state
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//file
import { editpmThunk } from "../redux/company_pmSlice";


export default function CompanyProductManagementEdit() {
    const dispatch = useDispatch();

    const [editProduct, setEditProduct] = useState({
        name: "",
        description: "",
        stock: "",
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
            <div className='d-flex justify-content-center'>
                <Card style={{ width: '25rem' }} className="text-center">
                    <Card.Body>

                        <Card.Title>Edit Product  </Card.Title>
                        <div className='row'>
                            <label>Name: </label>
                            <input type="text" placeholder='Tesla' name="name" onChange={handleEditChange} className="addPmInput" />
                        </div>
                        <br />
                        <div className='row'>
                            <label >Description: </label>
                            <input type="text" placeholder='electric cars and SUVs' name="description" onChange={handleEditChange} className="addPmInput" />
                        </div>
                        <br />
                        <div className='row'>
                            <label>Type: </label>
                            <input type="text" name="type" onChange={handleEditChange} className="addPmInput" />
                        </div>
                        <br />
                        <div className='row'>
                            <label >Price: </label>
                            <input type="number" placeholder='367100' name="price" onChange={handleEditChange} className="addPmInput" />
                        </div>
                        <br />
                        <div className='row'>
                            <label >Stock: </label>
                            <input type="number" placeholder='2' name="stock" onChange={handleEditChange} className="addPmInput" />
                        </div>
                        <br />
                        <div className='row'>
                            <label >Tag: </label>
                            <input type="text" placeholder='car' name="tag" onChange={handleEditChange} className="addPmInput" />
                        </div>

                


                        <br />

                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <br />
                        <Button onClick={() => dispatch(editpmThunk(editProduct))} variant="outline-dark"><TiTick /></Button>
                    </Card.Body>
                </Card>
            </div>
        </div >
    )
}
