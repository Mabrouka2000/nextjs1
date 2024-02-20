import React from "react";
import Image from "next/image";
import i2 from "../../../images/i2.jpg";
import { card } from "../../../components/constants";

export default function page() {
  const companyIndexToShow = 2;

  if (
    companyIndexToShow < 0 ||
    companyIndexToShow >= Object.values(card.shoplist).length
  ) {
    return <p>Index d entreprise invalide</p>;
  }

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
        className=""
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
          <p>
            <span style={{ color: "#326608" }}>OUVRE DE 18:00 À 23:00</span>
          </p>
        </div>
      </div>
    </div>
  );
}
