import type { Metadata } from "next";
import Footer from "@/app/pages/footer/footer";

import { Inter } from "next/font/google";

import Header from "./components/Header";
// import DropdownMenu from "./components/DropdownMenu";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Bienvenue a notre site",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div style={{ backgroundColor: "red !important" }}> */}
        <Header />
        {/* </div> */}
        <main className="Container">{children}</main>
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        ></link>
        <br />
        <br />
        <br />
        <Footer />
      </body>
    </html>
  );
}
