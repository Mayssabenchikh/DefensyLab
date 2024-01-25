import React from 'react'
import logo1 from "../../../assets/logo1.png"
import { IoPersonOutline } from "react-icons/io5";
import {  Link } from "react-router-dom";
import "./navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo1} />
        </div>
        <div className="navbar-links_container">
          <ul><li><a href="#services">Services</a></li>
          <li><a href="#references">Références</a></li>
          <li><a href="#securite">Sécurité du Cloud</a></li>
          <li><a href="#contact">Nous contacter</a></li></ul>
        </div>
      </div>
      <div className="navbar-login">
        <IoPersonOutline />
        <Link to="/login"><span>Login</span></Link>
      </div>
    </div>
  )
}

export default Navbar
