import React, { useState, useEffect } from 'react';
import "./nombre.css"
const Number = ({ limit, text }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber(prevNumber => {
        if (prevNumber < limit) {
          return prevNumber + 1;
        } else {
          clearInterval(intervalId);
          return prevNumber;
        }
      });
    }, 0.0001);

    return () => clearInterval(intervalId);
  }, [limit]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return num.toString();
    }
  };

  return (
    <div className="inner-container">
      <div className='bloc'>
        <h2 className="number-text">{formatNumber(number)}+</h2>
        <h2 className='num-text'>{text}</h2>
      </div>
    </div>
  );
};

export default Number;