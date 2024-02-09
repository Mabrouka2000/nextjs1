import React from "react";
import { ListProduit } from "../../constants/Produit";
import { BiMoney } from "react-icons/bi";

function Produit() {
  const dateSys = new Date();
  const heure = dateSys.getHours();
  const couleurTexte = heure >= 8 && heure < 18 ? "text-danger" : "";

  return (
    <div
      className="d-flex flex-wrap produit-container"
      style={{ marginLeft: "20px" }}
    >
      {/* Ajout de la classe 'produit-container' */}
      {ListProduit.map((produit, index) => (
        <div className="col-sm" key={index} style={{ margin: "1px" }}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={produit.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title custom-font-size text-right">
                <span>{produit.name}</span>
              </h5>
              <h5>
                <span className={couleurTexte}>
                  {heure >= 8 && heure < 18 ? "OUVERT" : "FERMÉ "}
                </span>
              </h5>
              <p className="card-text">{produit.description}</p>
              <div className="d-flex justify-content-start align-items-center">
                <div
                // style={{ width: "40px", height: "40px", overflow: "hidden", border-radius: "50%" }}
                >
                  <a href="/pg">
                    <img
                      src="https://static.vecteezy.com/ti/vecteur-libre/p1/32222460-en-especes-paiement-vecteur-icone-vectoriel.jpg"
                      style={{ height: "40px", backgroundColor: "#24A451" }}
                      className="rounded-circle"
                      alt="no data"
                    />
                  </a>
                </div>
                <div>
                  <a href="/nomDossier">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0h2C15VPNVMWxosiKh__iI3v9dLDrlUZdCQ&usqp=CAU"
                      style={{ height: "40px", backgroundColor: "#24A451" }}
                      className="rounded-circle"
                      // className="rounded-circle"
                      alt="no data"
                    />
                  </a>
                </div>
                <div>
                  <a href="/nomDossier">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/6127b214067d690b48359e03/9acacf88-f8fc-4de6-8226-fd8bee969746/TR+%2810%292.png"
                      style={{ height: "40px", backgroundColor: "#3a3c3b" }}
                      className="rounded-circle"
                      // className="rounded-circle"
                      alt="no data"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Produit;
