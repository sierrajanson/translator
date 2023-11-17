import React from 'react';
import './Navbar.css'
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div className="link_container">
    <li>
      <Link to="/"className="link">Home</Link>
    </li>
    <li>
      <Link to="/translate"className="link">Translate</Link>
    </li>
    <li className="about_link">
      <Link to="/about"className="link">About</Link>
    </li>
  </div>
  );
}
export default Navbar;