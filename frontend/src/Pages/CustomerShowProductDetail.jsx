import React from 'react';

//file 
import CustomerNavbar from '../Components/CustomerNavbar';

//react icon
import { BsReverseBackspaceReverse } from "react-icons/bs";

//bootstrap 
import Button from 'react-bootstrap/Button';



export default function CustomerShowProductDetail() {
    return (
        <div>
            {/* Navbar */}
            <CustomerNavbar />


            <div className="text-center">
                <img src="" alt="" />
                <br />
                <h1>Product name</h1>
                <br />
                <h2>Price</h2>
                <br />
                <h3>Description</h3>
                <br />
                <h4>Company</h4>
                <br />
                <Button variant='light'><BsReverseBackspaceReverse/></Button>

            </div>
        </div>
    )
}
