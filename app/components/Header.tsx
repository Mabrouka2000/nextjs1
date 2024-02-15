import React from "react";
import Image from "next/image";
import i1 from "../images/i1.png";
import dynamic from "next/dynamic";

const DropDownMenu = dynamic(() => import("./DropDownMenu"), { ssr: false }); // Render DropDownMenu on the client side only// Import de l'image i2

const Header = () => {
  return (
    <div
      // className="header bg-body-tertiary"
      style={{ backgroundColor: "white !important" }}
    >
      <nav>
        <div className="container">
          <div className="logo">
            <Image
              src={i1} // Remplacez i1 par i2
              width={90} // Réduire la taille de l'image
              height={100} // Réduire la taille de l'image
              alt="Logo"
            />
          </div>
        </div>
        <DropDownMenu />
      </nav>
    </div>
  );
};

export default Header;
