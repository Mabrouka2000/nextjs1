import React from 'react'
import Image from 'next/image'
import i2 from "../app/images/i2.png"
import {Card, CardHeader, CardBody } from "@nextui-org/react";
import vraiepizza from"../app/img/vraiepizza.jpeg"
import "./globals.css";

export default function page() {
  return (
    
   <div> 
     <div className='img'> 
       <Image 
       src={i2}
       style={{
        width: '100%',
        height: 'auto',
              }}
        sizes="100vw"
        className="hidden md:block"
         alt="pizza"/> 
      </div> 
      <div style={{ flex: '10' }}>
    {/* Votre contenu à afficher à côté de l'image */}
  </div>

<span> <h1 className='text'>Nos magasins à proximité</h1></span>

    <div className="containers " >
      <Card >
      <CardHeader className="">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody >
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={i2}
          width={270} />
      </CardBody></Card>
      <Card >
      <CardHeader  >
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody >
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={i2}
          width={270} />
      </CardBody>
    </Card>

    <Card >
      <CardHeader  >
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody >
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={i2}
          width={270} />
      </CardBody>
    </Card>


    <Card >
      <CardHeader  >
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody >
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={i2}
          width={270} />
      </CardBody>
    </Card>
  
    <Card >
      <CardHeader className="">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody >
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={i2}
          width={270} />
      </CardBody></Card>
      <Card >
      <CardHeader  >
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody >
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={i2}
          width={270} />
      </CardBody>
    </Card>

    <Card >
      <CardHeader  >
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody >
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={i2}
          width={270} />
      </CardBody>
    </Card>


    <Card >
      <CardHeader  >
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody >
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={i2}
          width={270} />
      </CardBody>
    </Card></div>

    


   
 </div>

  )
}