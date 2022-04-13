import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Form from "./pages/loginForm/Form";
import { AuthContext } from "./components/context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Form />} />
          <Route exact path="/" element={user ? <Home /> : <Form />} />
          {/* <Route
            exact
            path="/login"
            element={user ? <Redirect to="/" /> : <Form />}
          /> */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
