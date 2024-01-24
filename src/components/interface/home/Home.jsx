import React from "react";
import "./home.css";
import "@fontsource/rubik";
import logo2 from "../../../assets/group.jpg";
import logo3 from "../../../assets/men.png";
function Home() {
  return (
    <div className="image-container">
      <img src={logo2} id="img" />
      <div className="image-overlay">
        <div className="text">
          <p id="rg">CYBER SECURITY</p>
          <h1>Cyber Security as a Service</h1>
          <p id="blc">
            Nous identifions,protégeons,répondons et récupérons toute violation
            potentielle de la securité dans votre organisation{" "}
          </p>
          <a href="#" className="btn">
            EN SAVOIR PLUS
          </a>
        </div>

      </div>
      
    </div>
    /*<div className='home'>
        <div className='overlay'></div>
        <div className='text'>
            <p id='rg'>CYBER SECURITY</p>
            <h1>Cyber Security as a Service</h1>
            <p id='blc'>Nous identifions,protégeons,répondons et récupérons toute violation potentielle de la securité dans votre organisation </p>
            <a href='#' className='btn'>EN SAVOIR PLUS</a></div>
            
        
    </div>*/
  );
}

export default Home;
