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

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Form />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/home/viewProfile" element={<viewProfile />}/>
            <Route path="/home/editProfile" element={<editProfile />}/> */}
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
