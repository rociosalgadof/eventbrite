import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../../context";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";

export default function Event() {
  //   const { setTickets, backgroundColor, setShow } = useContext(Context);

  //   let color;
  //   if (backgroundColor.show) {
  //     color = "#eeedf2";
  //   }

  //   let styles = {
  //     backgroundColor: color,
  //   };

  return (
    <>
      <Navbar />
      <div class="eventbrite--card--container">
        <div
          className="eventbrite--card--relative"
          // style={styles}
        >
          <img
            class="eventbrite--card--img"
            src="https://images.unsplash.com/photo-1454908027598-28c44b1716c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
        <div class="eventbrite--card">
          <div class="eventbrite--card--div--1">
            <div class="eventbrite--card--div--1--left">
              <img
                class="eventbrite--card--img--small"
                src="https://images.unsplash.com/photo-1454908027598-28c44b1716c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
            <div class="eventbrite--card--div--1--right">
              <div class="eventbrite--card--div--starting">
                <p>JUN</p>
                <p>21</p>
              </div>
              <div class="eventbrite--card--div--title">
                Open Coffee Startup Networking. Open conversations about startup
                life & fun
              </div>
              <div class="eventbrite--card--div--price">50 €</div>
            </div>
          </div>
          <div class="eventbrite--card--div--2">
            {/* <Link to="/tickets/:eventId"> */}
            <button
              class="eventbrite--card--div--2--button"
              // onClick={() => {
              //   setTickets();
              // }}
            >
              Entradas
            </button>
            {/* </Link> */}
          </div>
          <div class="eventbrite--card--div--3">
            <div class="eventbrite--card--div--3--left">
              <p class="eventbrite--card--div--3--title">
                Open Coffee Startup Networking. Open conversations about startup
                life,l funding, pitching, customers and investors.
              </p>
              <h2 class="eventbrite--card--h2">About this event</h2>
              <p class="eventbrite--card--p1">
                Startup Open Coffee and Networking. Startup Investor
                Accelerator.
              </p>
              <p class="eventbrite--card--p2">
                Come pitch your startup, share your journey, learn from others
                and connect with like-minded people from the startup world. You
                will meet other startup founders, voice out challenges you are
                facing at your current stage, have meaningful conversations.
              </p>
              <p class="eventbrite--card--p3">
                We usually also have investors and mentors in the events. So you
                may have a chance to connect with your future partners.
              </p>
              <p class="eventbrite--card--p4">
                These event series follow an open structure, and this time we
                will experience it and tailor the conversations based on the
                needs of the participants.
              </p>
            </div>
            <div class="eventbrite--card--div--3--right">
              <div class="eventbrite--card--div--3--div">
                <h3 class="eventbrite--card--div--3--right--h3">
                  Fecha y hora
                </h3>
                <div>
                  <p class="eventbrite--card--div--3--right--p">
                    jue., 23 jun. 2022, 19:00 <span>-</span>
                  </p>
                  <p class="eventbrite--card--div--3--right--p">
                    vie., 24 jun. 2022, 6:00 CEST
                  </p>
                </div>
              </div>
              <div class="eventbrite--card--div--3--div">
                <h3 class="eventbrite--card--div--3--right--h3">Ubicación</h3>
                <p class="eventbrite--card--div--3--right--p">
                  Passeig de Garcia Fària, 49, 08019 Barcelona
                </p>
              </div>
              <div class="eventbrite--card--div--3--space">
                {/* <Link
                  to="/"
                  onClick={() => {
                    setShow();
                  }}
                > */}
                Home
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
