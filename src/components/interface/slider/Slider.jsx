import { useRef, useEffect, useState } from "react";
import "./slider.css";
import Images from "./Images.js";
import { motion } from "framer-motion";
function Slider() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <div>
      <div>
        <p id="rge">NOS PARTENAIRES</p>
        </div>
      <motion.div ref={carouselRef} className="carousel" whileTap={{cursor:"grabbing"}}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left:-width }}
          className="inner-carousel"
        >
          {Images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slider;
