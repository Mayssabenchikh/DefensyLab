import React from 'react'
import './reference.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from "../../../assets/giz.png";
import img2 from "../../../assets/hannibal.png";
import img3 from "../../../assets/biat.png";
import img4 from "../../../assets/telecom.png";
import img5 from "../../../assets/atl.jpg";
import img6 from "../../../assets/gat.png";
import img7 from "../../../assets/sotacib.jpg";

function Reference() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        
      };
  return (
    <div className='carousel' id='references'>
        <div>
        <p id="rge">ILS NOUS FONT CONFIANCE</p>
        </div>
        <Slider {...settings}>
        <div className="box">
            <img src={img1}/>
        </div>
        <div className="box">
            <img src={img2}/>
        </div>
        <div className="box">
            <img src={img3}/>   
        </div>
        <div className="box">
            <img src={img4}/>
        </div>
        <div className="box">
            <img src={img5}/>
        </div>
        <div className="box">
            <img src={img6}/>
        </div>
        <div className="box">
            <img src={img7}/>
        </div>
        </Slider>
    </div>
  )
}

export default Reference
