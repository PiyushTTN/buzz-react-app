import React from "react";
import TTNLogo from "../../assets/images/TTN-logo.jpg";
import "./Form.css";

function LeftSide() {
  // const[email, setEmail] = useState("");
  // const[password, setPassword] = useState("");
  // const[error, setError] = useState("");



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
        <a href="/" className="FormBtn">
          <span>Sign in with Google</span>
        </a>
      </div>
    </>
  );
}

export default LeftSide;
