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


export default function CompanyProductManagementAdd() {
    const dispatch = useDispatch();

    const [addProduct, setAddProduct] = useState({
        name: "",
        description: "",
        quantity: "",
        price: "",
        tag: "",
        type: "",
    });

    const handleAddChange = (event) => {
        const { name, value } = event.target;
        setAddProduct((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
        console.log(addProduct);
    };


    // const handleAddBtnChange = (event) => {
    //     console.log(addProduct);
    //     dispatch(addpmThunk(addProduct))
    //     console.log(event)
    //     dispatch(showpmThunk());
    // };

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <Card style={{ width: '25rem' }} className="text-center">
                    <Card.Body>
                        <Card.Title>Add Product</Card.Title>
                        <div className='row'>
                            <label>Name: </label>
                            <input type="text" placeholder='Tesla' name="name" onChange={handleAddChange} className="addPmInput"/>
                        </div>
                        <br />
                        <div className='row'>
                            <label >Description: </label>
                            <input type="text" placeholder='electric cars and SUVs' name="description" onChange={handleAddChange} className="addPmInput"/>
                        </div>
                        <br />
                        <div className='row'>
                            <label>Type: </label>
                            <input type="text" name="type" onChange={handleAddChange} className="addPmInput"/>
                        </div>
                        <br />
                        <div className='row'>
                            <label >Price: </label>
                            <input type="number" placeholder='367100' name="price" onChange={handleAddChange} className="addPmInput"/>
                        </div>
                        <br />
                        <div className='row'>
                            <label >Quantity: </label>
                            <input type="number" placeholder='2' name="quantity" onChange={handleAddChange} className="addPmInput"/>
                        </div>
                        <br />
                        <div className='row'>
                            <label >Tag: </label>
                            <input type="text" placeholder='car' name="tag" onChange={handleAddChange} className="addPmInput"/>
                        </div>
                        <br />

                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        {/* <div className='row'>
                        <label >Image: </label>
                        <input type="file" />
                    </div> */}
                        <br />
                        <Button onClick={()=> dispatch(addpmThunk(addProduct))} variant="dark"><TiTickOutline /></Button>

                    </Card.Body>
                </Card>
            </div>
        </div >
    )
}
