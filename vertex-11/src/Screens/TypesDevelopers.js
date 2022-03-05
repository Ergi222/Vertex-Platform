import React from "react";
import Navbar from "../components/Navbar";
import "./buttonstyle.css";
import a from "../components/buton/web-design.png";
import b from "../components/buton/software-development.png";
import c from "../components/buton/mobile-application.png";
import d from "../components/buton/game-development.png";
import e from "../components/buton/dashboard.png";
import f from "../components/buton/coding.png";
import g from "../components/buton/server-storage.png";
import h from "../components/buton/refresh.png";
import i from "../components/buton/other.png";
import j from "../components/buton/cloud-service.png";
import Button from "../components/Buttons";

const TypesDevelopers = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-7 space-y-3">
        <Button />
      </div>
    </>
  );
};

export default TypesDevelopers;
