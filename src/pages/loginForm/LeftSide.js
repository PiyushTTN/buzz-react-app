import React from "react";
import TTNLogo from "../../assets/images/TTN-logo.jpg";
import "./Form.css";
import { firebase } from "../../Firebase/Firebase";
// import { GoogleAuthProvider } from "firebase/auth";

function LeftSide() {
  const SignInWithFirebase = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="FormLeft">
        <div className="FormLeft-top-logo">
          <img src={TTNLogo} alt="logo" />
        </div>
        <div className="FormLeft-top-text">
          <p className="FormLeft-heading">Enter your details and Start </p>
          <p className="FormLeft-heading1">your journey with us</p>
          <br />
          <p> Don't stop until you're proud.</p>
        </div>
        <br />
        <button className="FormBtn" onClick={SignInWithFirebase}>
          Sign in with Google
        </button>
      </div>
    </>
  );
}

export default LeftSide;
