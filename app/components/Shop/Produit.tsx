import React from "react";
import { ListProduit } from "../../constants/Produit";
import { BiMoney } from "react-icons/bi";

function Produit() {
  const dateSys = new Date();
  const heure = dateSys.getHours();

  // Détermine la classe pour la couleur du texte "ouvert" ou "fermé"
  const couleurTexte = heure >= 8 && heure < 18 ? "text-danger" : "";

  return (
    <div className="d-flex flex-wrap">
      {ListProduit.map((produit, index) => (
        <div className="col-sm" key={index}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={produit.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title custom-font-size text-right">
                <span>{produit.name}</span>{" "}
                <span className={couleurTexte}>
                  {heure >= 8 && heure < 18 ? "OUVERT " : "FERMÉ "}
                </span>
              </h5>
              <p className="card-text">{produit.description}</p>
              <div className="d-flex justify-content-start align-items-center">
                <BiMoney size={20} /> <BiMoney size={20} />{" "}
                <BiMoney size={20} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Produit;
