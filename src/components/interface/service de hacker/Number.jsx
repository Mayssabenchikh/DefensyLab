// ProgressiveNumber.js
import React, { useState, useEffect } from 'react';
import './number.css'; // Importez le fichier CSS

const Number = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber(prevNumber => {
        // Incrémente le nombre jusqu'à 100, puis arrête l'intervalle
        if (prevNumber < 100) {
          return prevNumber + 1;
        } else {
          clearInterval(intervalId);
          return prevNumber;
        }
      });
    }, 10);

    // Nettoyer l'intervalle lorsqu'un composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    
      <div className="inner-container">
        <div className='bloc'>
        <h2 className="number-text">{number}+</h2>
        <h2>partenaires satisfaits</h2></div>
      </div>
  );
};

export default Number;

