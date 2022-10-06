import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Alert from "react-bootstrap/Alert";



export default function Path(props) {
  return (
    <>
      <Alert variant="light">
        <div className="container">
          <div className="row">
            <div className="col-11">
              <AiOutlineHome /> &nbsp; <AiOutlineRight /> &nbsp; {props.path1} &nbsp;{" "}
              <AiOutlineRight /> &nbsp; {props.path2}
            </div>
            <div className="col-1">
              <GoBack />
            </div>
          </div>
        </div>
      </Alert>
    </>
  );
}
