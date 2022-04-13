import React, { useRef, useContext } from "react";
import "./Form.css";
import { LoginCall } from "../../components/apiCalls";
import { AuthContext } from "../../components/context/AuthContext";
// import { CircularProgress } from "@material-ui/core";

function RightSide() {
  const email = useRef();
  const password = useRef();
  const { isAuthenticated, user, error, dispatch } = useContext(AuthContext);

  const InputHandler = (e) => {
    e.preventDefault();
    // console.log(email.current.value)
    LoginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);

  return (
    <>
      <div className="FormRight">
        <div className="FormRight-top-heading">
          <h3>Login To Your Account</h3>
        </div>
        <div className="FormRight-form">
          <form onSubmit={InputHandler}>
            <input
              type="text"
              placeholder="TTN Username"
              className="FormInput"
              ref={email}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="FormInput"
              ref={password}
              required
            />
            <br />
            <input type="checkbox" className="FormCheckbox-btn" />
            <label htmlFor="checkbox-btn">Remember Me</label>
            <a href="/" className="FormText">
              Forgot password?
            </a>
            <div className="FormBottom-button">
              <button
                type="submit"
                className="FormButton1"
                disabled={isAuthenticated}
              >
                {isAuthenticated ? (
                  <i className="uil uil-spinner-alt"></i>
                ) : (
                  "Sign in "
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RightSide;

/* <CircularProgress color="white" size="20px" /> */
