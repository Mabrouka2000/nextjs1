import React from "react";
import Image from "next/image";
import i2 from "../../../images/i2.jpg";
import { card } from "../../constants";

export default function page() {
  const companyIndexToShow = 3;

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
          left: "10%", // Adjusted to position to the right
          transform: "translateY(-50%)",
          backgroundColor: "#d7c7c7", // White background
          color: "#000000", // Black text color
          padding: "20px",
          borderRadius: "10px", // Slightly rounded corners
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Box shadow for depth
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
