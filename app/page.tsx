"useClient";
import React from "react";
import Image from "next/image";
import "./globals.css";
import i2 from "../app/images/i2.jpg";
import { card } from "./components/constants";
import Header from "./components/Shop/Header";
import "./constants.css";

export default function page() {
  const isShopOpen = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 8 && currentHour < 18;
  };
  return (
    <div>
      <div className="img">
        <Image
          src={i2}
          style={{
            width: "100%",
            height: "250",
          }}
          className="hidden md:block"
          alt="pizza"
        />
      </div>

      <span>
        {/* {" "}
        <h1 className="text">Nos magasins à proximité</h1> */}
        <Header />
      </span>
      <div className="containers">
        {Object.values(card.shoplist).map((item: any, id: number) => (
          <div key={id}>
            <a
              href={`/components/boutiques/${item.Company.replace(/\s/g, "")}`}
            >
              <img src={item.image} alt={`Produit`} className="image" />
            </a>
            <br />
            <br />
            <div>
              <h4 style={{ display: "inline" }}>{item.Company}</h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p
                style={{
                  display: "inline",
                  color: isShopOpen() ? "green" : "red",
                }}
              >
                {isShopOpen() ? "Ouvert" : "Fermé"}
              </p>
            </div>
            <br />
            <br />
            <p>
              {" "}
              {item.Address},{item.PostalCode} {item.town}
            </p>
            <a
              href={`/components/boutiques/${item.Company.replace(/\s/g, "")}`}
            >
              <img
                src="https://static.vecteezy.com/ti/vecteur-libre/p1/32222460-en-especes-paiement-vecteur-icone-vectoriel.jpg"
                style={{ height: "40px", backgroundColor: "#24A451" }}
                className="rounded-circle"
                alt="no data"
              />
            </a>
            <a
              href={`/components/boutiques/${item.Company.replace(/\s/g, "")}`}
            >
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0h2C15VPNVMWxosiKh__iI3v9dLDrlUZdCQ&usqp=CAU"
                style={{ height: "40px", backgroundColor: "#24A451" }}
                className="rounded-circle"
                // className="rounded-circle"
                alt="no data"
              />
            </a>

            <a
              href={`/components/boutiques/${item.Company.replace(/\s/g, "")}`}
            >
              {" "}
              <img
                src="https://images.squarespace-cdn.com/content/v1/6127b214067d690b48359e03/9acacf88-f8fc-4de6-8226-fd8bee969746/TR+%2810%292.png"
                style={{ height: "40px", backgroundColor: "#3a3c3b" }}
                className="rounded-circle"
                // className="rounded-circle"
                alt="no data"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
