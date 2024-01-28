import React from "react";
import "./home.css";
import "@fontsource/rubik";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FormOne } from "../formone/FormOne";
import logo2 from "../../../assets/group.jpg";
import logo3 from "../../../assets/men.png";
function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };
  return (
    <div className="containerfirst">
      <div className="image-overlay"></div>
      <div className="text">
        <p id="rg">CYBER SECURITY</p>
        <h1>Cyber Security as a Service</h1>
        <p id="blc">
          Nous identifions,protégeons,répondons et récupérons toute violation
          potentielle de la securité dans votre organisation{" "}
        </p>
        <a href="#" className="btn" onClick={() => setModalOpen(true)}>
          EN SAVOIR PLUS
        </a>
        {modalOpen &&
          createPortal(
            <FormOne
              closeModal={handleButtonClick}
              /*onSubmit={handleButtonClick}*/
            ></FormOne>,
            document.body
          )}
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
