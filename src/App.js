import React, {useContext} from 'react';
import Home from './pages/home/Home';
import Form from './pages/loginForm/Form';
import {BrowserRouter as Router, Route, Routes, Redirect} from 'react-router-dom';
import {AuthContext} from './components/context/AuthContext';

function App() {

  const {user}= useContext(AuthContext);


  return (
    <>  <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="login" element={<Form/>} />
          {/* <Route exact path='/' element={ user ? <Home /> : <Sign in  /> } /> */}
           {/* <Route exact path='/login' element={ user ? <Redirect to ='/' /> : <Form />} />   */}
          {/* <Route exact path='/register' element={user ? <Redirect to ='/' /> : <Register />}  /> */}
          </Routes>
        </Router>

    </>
  )
}

export default App
