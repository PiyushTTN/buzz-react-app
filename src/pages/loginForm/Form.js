import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./Form.css";

function Form() {
  return (
    <>
      <div className="FormContainer">
        <div className="FormLeftContainer">
          <LeftSide />
        </div>
        <div className="FormRightContainer">
          <RightSide />
        </div>
      </div>
    </>
  );
}

export default Form;
