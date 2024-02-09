import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

import i2 from "../app/images/i2.jpg";
import vraiepizza from "../app/img/vraiepizza.jpeg";
import Header from "./components/Shop/Header";
import Produit from "./components/Shop/Produit";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function page() {
  const handleClick = () => {
    // setIsClicked(true);
    alert("ok!");
  };
  return (
    <div>
      <div className="img clickable">
        <Image
          src={i2}
          style={{
            width: "100%",
            height: "200px",
            // animation: scrollAnimation 10s linear infinite;
          }}
          sizes="100vw"
          className="hidden md:block"
          alt="pizza"
        />
      </div>
      <Header />

      <div>
        <div className="row" style={{ width: "" }}>
          <Produit />
        </div>
      </div>
    </div>
  );
}
