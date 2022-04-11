import React from "react";
import "./Form.css";

function RightSide() {
  return (
    <>
      <div className="FormRight">
        <div className="FormRight-top-heading">
          <h3>Login To Your Account</h3>
        </div>
        <div className="FormRight-form">
          <form>
            <input
              type="text"
              placeholder="TTN Username"
              className="FormInput"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="FormInput"
            />
            <br />
            <input type="checkbox" className="FormCheckbox-btn" />
            <label htmlFor="checkbox-btn">Remember Me</label>
            <a href="/" className="FormText">
              Forgot password?
            </a>
          </form>
          <div className="FormBottom-button">
            <input type="submit" className="FormButton1" value="Sign in" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSide;
