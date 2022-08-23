import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { Context } from "../../context";

export default function Tickets() {
  //   const { setTickets } = useContext(Context);
  return (
    <div class="eventbrite--tickets">
      <div class="eventbrite--tickets--left">
        <div class="eventbrite--tickets--left--title">
          <h2 class="tickets--title">San Phun 2022</h2>
          <div class="tickets--dates">
            jue., 23 de jun. de 2022 19:00 - vie., 24 de jun. de 2022 6:00 CEST
          </div>
        </div>
        <div class="eventbrite--tickets--left--tickets">
          <h1 class="tickets--entradas">Entradas</h1>
          <div class="tickets--1">
            <div>
              <p>Early bird ticket</p>
              <p class="tickets--choose--price">50,00 €</p>
            </div>
            <div>
              <input type="number" class="tickets--input" />
            </div>
          </div>
          <div class="tickets--2">
            <div>
              <p>Early bird ticket</p>
              <p class="tickets--choose--price">50,00 €</p>
            </div>
            <div>
              <input type="number" class="tickets--input" />
            </div>
          </div>
        </div>

        <div class="eventbrite--tickets--left--button">
          <Link
            to="/"
            className="tickets--link--home"
            // onClick={() => {
            //   setTickets();
            // }}
          >
            Home
          </Link>
          <button class="tickets--buy--button">Comprar</button>
        </div>
      </div>
      <div class="eventbrite--tickets--right">
        <div class="eventbrite--tickets--right--title">
          <img
            class="tickets--img"
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div class="eventbrite--tickets--right--tickets">
          <p class="tickets--resumen">Resumen del pedido</p>
          <p class="tickets--title--resumen">
            <span>1xThird Release</span>
            <span>50,00 €</span>
          </p>
        </div>
        <div class="eventbrite--tickets--right--total">
          <p class="tickets--final--total">
            <span>Total</span>
            <span>50,00 €</span>
          </p>
        </div>
      </div>
    </div>
  );
}
