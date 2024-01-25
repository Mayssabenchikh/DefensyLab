import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Carousel from "./carousel/Carousel";
import Service from "./service/Service";
import CarouselTwo from "./carousel2/CarouselTwo"
const Interface = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Carousel/>
      <Service/>
      <CarouselTwo/>
    </div>
  );
};

export default Interface;
