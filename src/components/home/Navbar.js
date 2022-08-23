import React, { useContext } from "react";
// import { Context } from "../../context";

export default function Navbar() {
  //   const { backgroundColor } = useContext(Context);

  return (
    <nav
      className={
        // backgroundColor.show
        //   ? "eventbrite--logo--links navbar--show"
        //   :
        "eventbrite--logo--links"
      }
    >
      <div className="eventbrite--logo">
        <label className="logo">eventbrite</label>
      </div>
      <div className="eventbrite--input">
        <img src="./dots.svg" className="eventbrite--input--img" />
      </div>
      <div className="eventbrite--links">
        <a className="eventbrite--link--1">Crea un evento</a>
        <a className="eventbrite--link--2">Iniciar sesión</a>
        <a className="eventbrite--link--3">Registrarse</a>
      </div>
    </nav>
  );
}
