"use client";
import React from "react";
import { useState } from "react";
import { card } from "../../../components/constants";
import Icons from "@/app/components/icons/Icons";
import Pagem from "../../Imagenav/Page";
import "./guyancourt.css";
import Modal from "@/app/pages/Modal";
import Image from "next/image";
import "@/app/pages/modal.css";

export default function Page() {
  const [showModal, setShowModal] = useState(false);

  const companyIndexToShow = 0;
  if (
    companyIndexToShow < 0 ||
    companyIndexToShow >= Object.values(card.shoplist).length
  ) {
    return <p>Index d entreprise invalide</p>;
  }

  const companyToShow: any = Object.values(card.shoplist)[companyIndexToShow];
  const menuItems = Object.values(companyToShow.menu1);

  return (
    <div>
      <div className="img" style={{ position: "relative" }}>
        <Pagem />
        <div
          className=""
          style={{
            position: "absolute",
            top: "50%",
            left: "20%",
            transform: "translate(-50%,-50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <p>{`${companyToShow.Company.replace(/\s/g, "")}`} </p>
            <p>
              ouvert de {companyToShow.openingTime1} à{" "}
              {companyToShow.closingTime1} et de {companyToShow.openingTime2} à{" "}
              {companyToShow.closingTime2}
            </p>
            <p>
              {" "}
              {companyToShow.Address},{companyToShow.PostalCode}{" "}
              {companyToShow.town}
            </p>
            <a href="">Informations utiles</a>
            <div></div>
            <Icons />
          </div>
        </div>
      </div>
      <div className="modal1">
        {" "}
        <ul>
          {menuItems.map((menuItem: any) => (
            <li key={menuItem.id} onClick={() => setShowModal(true)}>
              {" "}
              {menuItem.title}
            </li>
          ))}

          {/**  <select className="max-w-xs nav-link"> 
                {menuItems.map((menuItem:any) => (
                    <option key={menuItem} value={menuItem.title1}> {menuItem.title1}</option>    
                  ))}     
                </select> */}
        </ul>
      </div>
      <div className="text-center"></div>
      <div className="containers">
        {menuItems.map((menuItem: any) => (
          <div key={menuItem.id} className="flex my-2">
            <p className="title">{menuItem.title}</p>
            <Image
              src={menuItem.image}
              width={300}
              height={200}
              className="image"
              alt="image"
            />
            <button
              onClick={() => setShowModal(true)}
              className="button type1"
              type="button"
            >
              <span className="btn-txt">Commander</span>
            </button>
            {showModal ? (
              <>
                <div
                  className="modal-background"
                  onClick={() => setShowModal(false)}
                />
                <Modal setShowModal={setShowModal} showModal={showModal} />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
