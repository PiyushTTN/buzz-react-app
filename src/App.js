import React, { useContext, useEffect } from "react";
import Home from "./pages/home/Home";
import Form from "./pages/loginForm/Form";
import { AuthContext, AuthProvider } from "./components/context/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Profile from "./pages/profile/Profile";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />}/>
            {/* <Route path="/home/editProfile" element={<editProfile />}/> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
