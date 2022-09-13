// /company/sales_history

import React from 'react'

//Bootstrap
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';

//file
import CompanyNavbar from '../Components/CompanyNavbar';


export default function CompanySalesHistory() {
  return (
    <div>
      <CompanyNavbar />
      <Accordion defaultActiveKey={['0']} alwaysOpen>

        <Accordion.Item eventKey="0">
          <Accordion.Header>#1 09/09/2022</Accordion.Header>
          <Accordion.Body>



<div style={{ minWidth: '30rem' }}>
  

            <Table striped bordered hover variant="primary" id='comSalesHisTable' style={{ minWidth: '30rem' }}>
              <thead id='comSalesHisThead'>
                <tr className='comSalesHisTr'>
                  <th >Customer</th>
                  <th >Phone no</th>
                  <th >Address</th>
                  <th >Product</th>
                  <th >Status</th>
                </tr>
              </thead>
              <tbody id='comSalesHisTbody'>
                <tr className='comSalesHisTr'>
                  <td>Siri</td>
                  <td>12345678</td>
                  <td>MK</td>
                  <td>Apple * 1</td>
                  <td>
                    <select name="languages" id="lang">
                      <option value="javascript">Pending</option>
                      <option value="javascript">JavaScript</option>
                      <option value="php">PHP</option>
                    </select>
                  </td>
                </tr>

              </tbody>
            </Table>

            </div>



            {/* Customer:
            <br />
            Phone no.:
            <br />
            Address:
            <br />
            Product:
            <br />
            Status:
            <select name="languages" id="lang">
              <option value="javascript">Select a language</option>
              <option value="javascript">JavaScript</option>
              <option value="php">PHP</option>
              <option value="java">Java</option>
              <option value="golang">Golang</option>
              <option value="python">Python</option>
              <option value="c#">C#</option>
              <option value="C++">C++</option>
              <option value="erlang">Erlang</option>
            </select>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Status
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">done</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

          </Accordion.Body>
        </Accordion.Item>

        {/* <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item> */}


      </Accordion>


    </div>
  )
}
