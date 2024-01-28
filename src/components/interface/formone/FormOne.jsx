import React from "react";
import "./formone.css";
export const FormOne = ({ onSubmit, onCancel, closeModal, children }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal("Modal was closed")}
          
        >
          <p className="close">&times;</p>
        </div>
        <div className="modal-content">
          <h2>Vous avez une question?</h2>
          <p className="parg">
            Laissez nous un message et un conseiller vous contacterait dans les
            plus brefs des délais
          </p>
          <form>
            <input type="text" placeholder="Votre nom" />
            <br />
            <input type="email" placeholder="Email" required />
            <br />
            <input type="text" placeholder="Sujet" required />
            <br />
            <textarea placeholder="Votre Message" required />
            <br />
            <button
              type="submit"
              className="btn btn-submit"
              /*onClick={() => onSubmit("Submit button was clicked")}*/
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
