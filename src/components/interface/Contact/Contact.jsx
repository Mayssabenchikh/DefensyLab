import React from 'react'
import Navbar from "../navbar/Navbar"
import "./contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
function Contact() {
  return (
    <div className='contactcontainer' id='contact'>
      <div className='concont'>
        <div className="titreg"><h1 >Nous rejoindre</h1></div>
        <div className="partg">
        <div className="parton">
        <div><h3 className='ico'><FaPhoneAlt/>Tél</h3><span>+216 54 33 00 20</span></div></div>
        <div className="parttw">
        <div><h3 className='ico'> <TfiEmail/> Email</h3><span>contact@defensy.io</span></div></div>
        <div className="partth">
        <div><h3 className='ico'><FaLocationDot/>Addresse</h3><span>Pôle technologique Ghazela, Tunis</span></div></div>
      </div>
      </div>
      <Navbar/>
      <div className='copy'><hr id="ligne"/>
      <span >Copyright 2022 © All Right Reserved Powered by <a href="https://synapseconsulting.tn/" target='_blank'>Synapse Consulting</a></span>
      </div>
    </div>
  )
}

export default Contact
