import './App.css';
//import {Button, Form ,Col ,Row, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./style.css";
import Photo from "./Component/Profile/ProfilePhoto.js"
import Name from "./Component/Profile/FullName.js"
import Address from "./Component/Profile/Address.js"
//import myWonderfulImage from "./imageInSrc.jpg"
//import React, { useState } from "react";


  const App = () => (
    <>
      <div class='box'>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
      </div>
      <center><Photo/></center><br/>
      <center><Name/></center><br/>
      <center><Address/></center><br/>
    </>
);

export default App;