import React from 'react'
import Number from './Nombre'
import "./statstique.css"
function Statstique() {
  return (
    <div className='nom'>
      <div><Number limit={2400} text="Menaces analysés par an" /></div>
      <div><Number limit={40} text="Partenaires satisfaits" /></div>
      <div><Number limit={18} text="Années d'expérience" /></div>
      <div><Number limit={1300} text="Rapport de sécurité annuel" /></div>
    </div>
  )
}

export default Statstique
