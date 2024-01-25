import React from 'react'
import './service.css'
import { IoIosCheckmarkCircle } from "react-icons/io";
import img1 from "../../../assets/P2-1.jpg"
import img2 from "../../../assets/background-3.jpg"
function Service() {
    const backgroundImageUrl = {img1};
    const contentImageUrl = {img2};
  
    const containerStyle = {
      backgroundImage: `url(${img2})`,
    };
  
    return (
      <div className="container" style={containerStyle}>
        <div className="overlay"></div>
        <div className="text1">
            <div className='image'>
          <img src={img1} alt="Content" />
          
          </div>
          <div className='article'>
          <p id='t1'>BIENVENUE À DEFENSY LAB</p>
        <h1 className='pos'>Services de Hacker powered Security </h1>
        <p id='t2' className='pos'>Evaluez votre système de réseau, vos applications web et mobile en simulant les attaques malicieuses pour détecter les vulnérabilités et les failles avec : </p>
        <ul className='pos'>
            <li><a href='#'><span className='icon'><IoIosCheckmarkCircle /></span><span id='t'> Ingénierie sociale</span></a></li>
            <li><a href='#'><span className='icon'><IoIosCheckmarkCircle /></span><span id='t'> Pentest des pages web, app mobile, infrastructure rsx…</span></a></li>
            <li><a href='#'><span className='icon'><IoIosCheckmarkCircle/></span><span id='t'> Test de sécurité des applications web et mobile</span></a></li>
            <li><a href='#'><span className='icon'><IoIosCheckmarkCircle /></span><span id='t'> Red teaming</span></a></li>
            <li><a href='#'><span className='icon'><IoIosCheckmarkCircle /></span><span id='t'> Certification ISO 27001</span></a></li>
        </ul ><div className='pos' id='but'><a href='#form' >DÉMO EN LIGNE </a></div>
        </div>
        </div>
      </div>
    );
  };
 /* )
}*/

export default Service
