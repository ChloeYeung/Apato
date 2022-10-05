import React from "react";
import errorImg from "../images/error.png";
import RubberBand from "react-reveal/RubberBand";

export default function Error() {
  return (
    <>
      <div className=" ">
        <div
          className="d-flex  row  text-center justify-content-center align-items-center"
          style={{ margin: "150px" }}
        >
          <RubberBand>
            <img className="" src={errorImg} id="emptyCartPic" />
          </RubberBand>
          <h5 className=" ">Error 404</h5>
          <p className="text-secondary">
            Hooray! You have found our secret dinosaur for error
          </p>
        </div>
      </div>
    </>
  );
}
