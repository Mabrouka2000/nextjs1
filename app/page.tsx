import React from "react";
import Image from "next/image";
import i2 from "../app/images/i2.jpg";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import vraiepizza from "../app/img/vraiepizza.jpeg";
import "./globals.css";
import Header from "./components/Shop/Header";
import Produit from "./components/Shop/Produit";

export default function page() {
  return (
    <div>
      <div className="img">
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

      <div className="containers ">
        <div className="row" style={{ width: "" }}>
          <Produit />
        </div>
      </div>
    </div>
  );
}
