import React from 'react'
import "./servicetwo.css"
import img1 from "../../../assets/backgrond.jpg"
import img2 from "../../../assets/I3-1.png"
import img3 from "../../../assets/I2-1.png"
import img4 from "../../../assets/I10-1.png"
function ServiceTwo() {
    
    const containeroneStyle = {
      backgroundImage: `url(${img1})`,
    };
    return(
    <div className="containerone" style={containeroneStyle} id='securite'>
        <div className="overlaytwo"></div>
        <div className="texttwo">
            <div className='part1'>
                <p id='titre'>POURQUOI DEFENSY LAB</p>
                <h3 className="gtitre">De la cybersécurité, préventive, évolutive, sur mesure et efficace !</h3>
                <p className="par">En integrant la cybersécurité à tous les processus métier, nous identifierons, protégerons, détectons, répondons et récupérerons de toute faille de sécurité potentielle dans votre organisation, en minimisant les coûts de contre attaque tardive</p>
                <div className="butt"><a href="form2">EN SAVOIR PLUS</a></div>
            </div>
            <div className="part2">
                <div className='parttt1'>
                <div className="partt1">
                    <img src={img4}/>
                    <h2 className='t1'>Sécurité du cloud</h2>
                    <p>Les actifs et les charges de travail dans le cloud sont exposés à un large éventail de menaces de cybersécurité, y compris les fuites de données, les rançongiciels, les attaques DDoS et les attaques par phishing.</p>
                </div>
                <div className="partt2">
                    <img src={img3}/>
                    <h2 className='t1'>Gouvernance de données</h2>
                    <p>La collecte et la gestion des données personnelles auprès des utilisateurs d’un service en ligne (application, site Internet, etc.) sont une ressource précieuse pour le pilotage des actions d’une entreprise.</p>
                </div>
                </div>
                <div className="partt3">
                    <img src={img2}/>
                    <h2 className='t1'>Implémentation des framework zero trust :</h2>
                    <p>La mise en œuvre d’un cadre Zero Trust au sein d’une organisation nécessite de diriger avec un état d’esprit « ne jamais faire confiance et toujours vérifier » pour sécuriser vos données et vos ressources.</p>
                </div>
            </div>
        </div>
    </div>
    );};
export default ServiceTwo;
