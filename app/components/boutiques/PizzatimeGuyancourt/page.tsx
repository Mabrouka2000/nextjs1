import React from "react";
import Image from "next/image";
import i2 from "../../../images/i2.jpg";
import { card } from "../../../components/constants";

export default function page() {
  // Supposons que vous voulez afficher la première entreprise dans la liste
  const companyIndexToShow = 0; // Changez ceci pour l'indice de l'entreprise que vous souhaitez afficher

  // Assurez-vous que l'indice est valide
  if (
    companyIndexToShow < 0 ||
    companyIndexToShow >= Object.values(card.shoplist).length
  ) {
    return <p>Index d entreprise invalide</p>;
  }

  // Récupérez les détails de l'entreprise à afficher
  const companyToShow = Object.values(card.shoplist)[companyIndexToShow];

  return (
    <div className="img" style={{ position: "relative" }}>
      <Image
        src={i2}
        style={{
          width: "100%",
          height: "250",
        }}
        className="hidden md:block"
        alt="pizza"
      />
      <div
        className="containers"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
        }}
      >
        <div>
          <p>{`${companyToShow.Company.replace(/\s/g, "")}`} </p>
          <p>
            {" "}
            {companyToShow.Address},{companyToShow.PostalCode}{" "}
            {companyToShow.town}
          </p>
        </div>
      </div>
    </div>
  );
}
