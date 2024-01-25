import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Carousel from "./carousel/Carousel";
import Service from "./service/Service";
import CarouselTwo from "./carousel2/CarouselTwo"
import ServiceTwo from "./service2/ServiceTwo";
const Interface = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Carousel/>
      <Service/>
      <CarouselTwo/>
      <ServiceTwo/>
    </div>
  );
};

export default Interface;
