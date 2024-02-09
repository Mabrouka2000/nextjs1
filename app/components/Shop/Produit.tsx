import React from "react";
import { ListProduit } from "../../constants/Produit";
import { BiMoney } from "react-icons/bi";

function Produit() {
  const dateSys = new Date();
  const heure = dateSys.getHours();
  // const [isClicked, setIsClicked] = React.useState(false);
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
                <div>
                  <img
                    src="data:image/png;base64,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"
                    style={{ height: "40px", backgroundColor: "#24A451" }}
                    className="rounded-circle"
                    alt="no data"
                  />
                </div>
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
