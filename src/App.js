import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Checkout from './Component/Checkout';
import Login from './Component/Login';

function App() {
  return (
    <div className="app">
      
    <Routes>
      <Route path ="/checkout" element={
                                  <React.Fragment>
                                    <Header/>    
                                    <Checkout/>
                                  </React.Fragment>}/>
      
      <Route path ="/login" element={<Login/>}/>
      
      <Route path ="/" element={
                                  <React.Fragment>
                                    <Header/>
                                    <Home/>
                                  </React.Fragment>}/>
      
   </Routes>  
     
    </div>
  );
}

export default App;
