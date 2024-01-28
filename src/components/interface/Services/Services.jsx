import React from "react";
import "./Services.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FormOne } from "../formone/FormOne";
import { FaCircleChevronRight } from "react-icons/fa6";
import img1 from "../../../assets/background-2.png";
import img2 from "../../../assets/I5-1.png";
import img3 from "../../../assets/I6-1.png";
import img4 from "../../../assets/I7-1.png";
import img5 from "../../../assets/I8-1.png";
import img6 from "../../../assets/I9-1.png";
import img7 from "../../../assets/I10-1.png";
function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };
  const containerserStyle = {
    backgroundImage: `url(${img1})`,
  };
  return (
    <div className="containerser" style={containerserStyle} id="services">
      <div className="textser">
        <h1 className="titreserv">NOS SERVICES</h1>
        <h1 className="grtitre">La cybersécurité nous connait bien</h1>
        <p className="parser">
          Accédez à une grande variété de services techniques qui répondent à
          tous vos besoins.
        </p>
      </div>
      <div className="blocser">
        <div className="partoser">
          <div className="pbloc">
            <img src={img2} />
            <h3 className="rget">Détection des menaces</h3>
            <p className="ppar">
              Defensy LAB protège les ressources matériels et techniques en
              proposant des outils qui perçoivent et détectent les cybers
              attaques.
            </p>
            <span className="lie">
              <a href="#services" onClick={() => setModalOpen(true)}>
                EN SAVOIR PLUS{" "}
                <span className="ic">
                  <FaCircleChevronRight />
                </span>
              </a>
              {modalOpen &&
          createPortal(
            <FormOne
              closeModal={handleButtonClick}
              /*onSubmit={handleButtonClick}*/
            ></FormOne>,
            document.body
          )}
            </span>
          </div>
          <div className="pbloc">
            <img src={img3} />
            <h3 className="rget">Audit et Diagnostic</h3>
            <p className="ppar">
              Bénéficiez de services d'audit rapides et fiables pour vos
              applications et infrastructure, garantissant une protection
              élevée.
            </p>
            <span className="lie">
              <a href="/#">
                ASSISTEZ À UNE DÉMO{" "}
                <span className="ic">
                  <FaCircleChevronRight />
                </span>
              </a>
            </span>
          </div>

          <div className="pbloc">
            <img src={img4} />
            <h3 className="rget">SOC As A Service</h3>
            <p className="ppar">
              nous proposons une solution de surveillances, détection et
              d’alerte concernant des événements ou incidents de sécurité dans
              un environnement IT.
            </p>
            <span className="lie">
              <a href="">
                OBTENIR UN DEVIS
                <span className="ic">
                  <FaCircleChevronRight />
                </span>
              </a>
            </span>
          </div>
        </div>
        <div className="parttser">
          <div className="pbloc">
            <img src={img5} />
            <h3 className="rget">Services managés</h3>
            <p className="ppar">
              Nous nous engageons à vous fournir le meilleur support technique
              dont vous aurez besoin.
            </p>
            <span className="lie">
              <a href="">
                REJOINDRE UN EXPERT
                <span className="ic">
                  <FaCircleChevronRight />
                </span>
              </a>
            </span>
          </div>
          <div className="pbloc">
            <img src={img6} />
            <h3 className="rget">Certification ISO 27001</h3>
            <p className="ppar">
              DEFENSYLAB propose de vous accompagner dans la mise en place d’un
              système de management de la sécurité (SMSI) dans la perspective ou
              non d’une certification.
            </p>
            <span className="lie">
              <a href="">
                OBTENIR UN DEVIS
                <span className="ic">
                  <FaCircleChevronRight />
                </span>
              </a>
            </span>
          </div>
          <div className="pbloc">
            <img src={img7} />
            <h3 className="rget">Security by design</h3>
            <p className="ppar">
              Nos ingénieurs assurent une bonne utilisation de cette approche
              qui nécessite des stratégies, tactiques et modèles de sécurité
              alternatifs pris en compte au début de la conception d’un logiciel
            </p>
            <span className="lie">
              <a href="#services" onClick={() => setModalOpen(true)}>
                EN SAVOIR PLUS
                <span className="ic">
                  <FaCircleChevronRight />
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
