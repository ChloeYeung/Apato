import React from "react";
//bootstrap
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
export default function SortDropdown(props) {
  let handleSortChange = function (e) {
    props.onSortValue(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Form.Select
              onChange={handleSortChange}
              name="type"
              id="showSort"
              className="showSortInput"
            >
              <option value="new">Newly Listed</option>
              <option value="lowest">Price: Lowest First</option>
              <option value="highest">Price: Highest First</option>
            </Form.Select>
          </div>
        </div>
      </div>
    </div>
  );
}
