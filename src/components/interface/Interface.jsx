import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Carousel from "./carousel/Carousel";
import Slider from "./slider/Slider";
const Interface = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/*<Slider/>*/}
      <Carousel/>
    </div>
  );
};

export default Interface;
