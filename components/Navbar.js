import React from 'react';
import './Navbar.css'
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div className="link_container">
    <li className="home">
      <Link className="link" to="/">Home</Link>
    </li>
    <li className="translate_container">
      <Link to="/translate"className="link">Discurso/Speech</Link>
    </li>
    <li>
      <Link to="/image"className="link">Image</Link>
    </li>
  </div>
  );
}
export default Navbar;