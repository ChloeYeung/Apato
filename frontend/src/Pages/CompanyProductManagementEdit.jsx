// /company/product_management/edit

//bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


//react icon
import { TiTick } from "react-icons/ti";

export default function CompanyProductManagementEdit() {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <Card style={{ width: '25rem' }} className="text-center">
                    <Card.Body>

                        <Card.Title>Edit Product</Card.Title>

                        <div className='row'>
                            <label>Name: </label>
                            <input type="text" />
                        </div>
                        <br />
                        <div className='row'>
                            <label >Description: </label>
                            <input type="text" />
                        </div>
                        <br />
                        <div className='row'>
                            <label >Quantity: </label>
                            <input type="number" />
                        </div>
                        <br />
                        <div className='row'>
                            <label >Price: </label>
                            <input type="number" />
                        </div>
                        <br />
                        <div className='row'>
                            <label >Tag: </label>
                            <input type="text" />
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
                        <Button variant="dark"><TiTick /></Button>
                    </Card.Body>
                </Card>
            </div>
        </div >
    )
}
