import React from "react";
import TTNLogo from "../../assets/images/TTN-logo.jpg";
import "./Form.css";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "./../../Firebase/Firebase";

function LeftSide() {
  const SignInWithFirebase = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        const email = result.user.email;
        let emailLast = email.split("@");
        let emailLastName = emailLast[1];
        if (emailLastName === "tothenew.com") {
          console.log("TTN");
        } else {
          console.log("Not TTN");
        }
      })
      .catch((error) => {
        console.log(error);
        const email = error.email;
        console.log(email);
      });
    // var provider = new GoogleAuthProvider();
    // const auth = getAuth();
    // var google_provider = new Firebase.auth.GoogleAuthProvider();

    // Firebase.auth()
    //   .signInWithPopup(google_provider)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
