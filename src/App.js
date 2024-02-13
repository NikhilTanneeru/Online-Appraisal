import './css/App.css';
import SignupPage from './signup';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <header>
        <center>
          <img src="./logo_icon.png" alt="Icon" />
        </center>
      </header>
    <div id="box" style={{padding:"15px",fontSize: "110%"}}>
      <center><h3>Login</h3></center>
      <hr/>
      <label htmlFor="uname">User Id: </label><br/>
      <input type="text" id="uname" name="uname" placeholder="Enter User Id Here"/><br/>
      <label htmlFor="pass">Password:</label><br/>
      <input type="text" id="pass" name="pass" placeholder="Enter Password Here"/><br/><br/>
      <center><button id="sbmtbtn">Submit</button></center>
      <br/>
      <hr/>
      <div id="bottom" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Link to="/forgot">Forgot Password?</Link>
        <Link to="/forgot">Sign Up</Link>
      </div>
    </div>
    <footer>
        <center>
          <p style={{ fontSize: '20px' }}>&copy; Copyright 2024, All Rights Reserved</p>
        </center>
    </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot" element={<SignupPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;
