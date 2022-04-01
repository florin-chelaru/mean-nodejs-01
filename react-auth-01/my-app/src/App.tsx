import React from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
