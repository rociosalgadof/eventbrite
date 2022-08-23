import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import lookup from "country-code-lookup";
// import { Context } from "../../context";
import getDate from "../../utils/formatDate";

export default function Card(props) {
  const allVenues = useSelector((state) => state.venues);
  const [venue, setVenue] = useState("");

  useEffect(function () {
    if (props.event.venue_id) {
      const event = allVenues.find(
        (element) => element.id === props.event.venue_id
      );
      let countryObj = lookup.byIso(event.address.country);
      setVenue(countryObj.country);
    }
  }, []);

  return (
    <Link to={`/show/${props.event.id}`}>
      <div
        className="eventbrite--section--4--card"
        // onClick={() => {
        //   setShow();
        // }}
      >
        <div className="eventbrite--section--4--upper">
          <img
            className="eventbrite--section--4--img"
            src={props.event.logo.original.url}
          />
        </div>
        <div className="eventbrite--section--4--down">
          <h1 className="eventbrite--section--4--down--h1">
            {props.event.name.text}
          </h1>
          <h2 className="eventbrite--section--4--down--h2">
            <span>{getDate(props.event.start.local)}</span>
          </h2>
          <p className="eventbrite--section--4--down--p1">
            <span>{!props.event.online_event ? venue : "Online"} </span>
          </p>
          <p className="eventbrite--section--4--down--p2">
            $5
            {/* {ticket} */}
          </p>
        </div>
      </div>
    </Link>
  );
}

//   useEffect(function () {
//     fetch(
//       `https://www.eventbriteapi.com/v3/events/${props.event.id}/ticket_classes/for_sale/`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer 7RHR3RSWFH2RAII3RT2A`,
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         if (json.ticket_classes[0].free) {
//           setTicket("Gratis");
//         } else {
//           setTicket(json.ticket_classes[0].cost.display);
//         }
//       });
//   }, []);

//   useEffect(function () {
//     if (!props.event.online_event) {
//       fetch(
//         `https://www.eventbriteapi.com/v3/venues/${props.event.venue_id}/`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: "Bearer 7RHR3RSWFH2RAII3RT2A",
//           },
//         }
//       )
//         .then((response) => response.json())
//         .then((json) => {
//           setVenue(json.address);
//         });
//     }
//   }, []);
