import React from 'react'
import './partenaires.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from "../../../assets/ansi_tuncert_logo-removebg-preview.png";
import img2 from "../../../assets/rfc.png";
import img3 from "../../../assets/micro.jpg";
import img4 from "../../../assets/addinn.png";
import img5 from "../../../assets/alight.jpg";
import img6 from "../../../assets/mgi.png";
function Partenaires() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        
      };
  return (
    <div className='carousel'>
        <div>
        <p id="rge">NOS PARTENAIRES</p>
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
        </Slider>
    </div>
  )
}

export default Partenaires
