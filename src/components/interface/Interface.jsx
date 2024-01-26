import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Partenaires from "./partenaires/Partenaires"
import ServiceH from "./service de hacker/ServiceH"
import Reference from "./References/Reference"
import Securite from "./securite du cloud/Securite";
import Statstique from "./statstique/Statstique";
import Services from "./Services/Services";
const Interface = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Partenaires/>
      <ServiceH/>
      <Reference/>
      <Securite/>
      <Statstique/>
      <Services/>
    </div>
  );
};

export default Interface;
