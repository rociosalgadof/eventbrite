import React, { useEffect, useState } from "react";
import Footer from "./home/Footer";
import Navbar from "./home/Navbar";
import Main from "./home/Main";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
