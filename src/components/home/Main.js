import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getVenues } from "../../actions/venues";
import getVenuesIds from "../../utils/getVenuesIds";
import getCities from "../../utils/getCities";
import createStateObject from "../../utils/createStateObject";
import City from "../home/City";
import formatName from "../../utils/formatName";
import checkTrueCity from "../../utils/checkTrueCity";
import formatNameInversed from "../../utils/formatNameInversed";
import objIsEmpty from "../../utils/objIsEmpty";
import getOnlineEvents from "../../utils/getOnlineEvents";
import getIdsPerCity from "../../utils/getIdsPerCity";
import getEventsPresenciales from "../../utils/getEventsPresenciales";

export default function Main() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const allEvents = useSelector((state) => state.events);
  const allVenues = useSelector((state) => state.venues);
  const [length, setLength] = useState();
  const [displayedEvents, setDisplayedEvents] = useState({});
  const [cityElements, setCityElements] = useState([]);
  const [citiesObject, setCitiesObject] = useState({});
  const [cityText, setCityText] = useState("");
  const [venuesIds, setVenuesIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [citiesArray, setCitiesArray] = useState([]);
  const [displayedEventsArray, setDisplayedEventsArray] = useState([]);

  useEffect(() => {
    if (allEvents.length) {
      setVenuesIds(getVenuesIds(allEvents));
    }
  }, [allEvents]);

  useEffect(() => {
    setLength(venuesIds.length);
  }, [venuesIds]);

  useEffect(() => {
    for (let id of venuesIds) {
      if (allVenues.length < length) {
        dispatch(getVenues(id));
      }
    }
    setIsLoading(!isLoading);
  }, [length]);

  useEffect(() => {
    if (allVenues.length) {
      setCitiesArray(getCities(allVenues));
    }
  }, [isLoading, allVenues]);

  useEffect(() => {
    if (citiesArray.length) {
      setDisplayedEvents(createStateObject(citiesArray));
    }
  }, [citiesArray]);

  useEffect(() => {
    if (citiesArray.length) {
      setCitiesObject(displayedEvents.cities);
      setCityElements(
        citiesArray.map(function (element) {
          return (
            <City
              name={element}
              key={element}
              displaying={displayedEvents}
              setDisplayedEvents={setDisplayedEvents}
            />
          );
        })
      );
    }
  }, [displayedEvents, citiesArray]);

  useEffect(() => {
    if (!objIsEmpty(citiesObject)) {
      setCityText(formatNameInversed(checkTrueCity(citiesObject)));
    }
  }, [citiesObject]);

  useEffect(() => {
    if (displayedEvents.online) {
      setDisplayedEventsArray(getOnlineEvents(allEvents));
    } else if (!displayedEvents.online && !displayedEvents.all) {
      let ids = getIdsPerCity(citiesArray, allVenues);
      if (displayedEvents.cities) {
        let trueCity = checkTrueCity(displayedEvents.cities);
        setDisplayedEventsArray(
          getEventsPresenciales(ids[trueCity], allEvents)
        );
      }
    } else {
      let ids = getIdsPerCity(citiesArray, allVenues);
      if (displayedEvents.cities) {
        let trueCity = checkTrueCity(displayedEvents.cities);
        let presenciales = getEventsPresenciales(ids[trueCity], allEvents);
        let online = getOnlineEvents(allEvents);
        setDisplayedEventsArray(presenciales.concat(online));
      }
    }
  }, [cityText, displayedEvents]);

  return (
    <div>
      <section className="eventbrite--section--1">
        <div className="eventbrite--banner">
          <div className="eventbrite--banner--text">
            Estamos aquí para ayudarte
          </div>
          <span>
            Consulta nuestros últimos recursos sobre el COVID-19 para permanecer
            a salvo y gestionar tus eventos; para{" "}
            <a
              className="eventbrite--a"
              href="https://www.eventbrite.es/l/coronavirus-recursos-participantes-eventos/"
            >
              {" "}
              asistentes{" "}
            </a>
            y{" "}
            <a
              className="eventbrite--a"
              href="https://www.eventbrite.es/l/coronavirus-recursos-organizadores-eventos/"
            >
              organizadores
            </a>
            .
          </span>
        </div>
      </section>
      <section className="eventbrite--section--2">
        <div className="eventbrite--section--2--div">
          <div className="eventbrite--section--2--container">
            <div className="eventbrite--section--2--text--1">Haz lo que</div>
            <div className="eventbrite--section--2--text--2">te apasiona</div>
          </div>
        </div>
        <div className="eventbrite--section--2--badge--div">
          <span className="eventbrite--section--2--badge">
            Superorganism en Great American Music Hall
          </span>
          <img
            className="eventbrite--section--2--img"
            src="https://cdn.evbstatic.com/s3-build/perm_001/bc5566/django/images/homefeed/music-campaing-1-1080-desktop.jpg"
            alt="consumer-header-background"
          />
        </div>
      </section>
      <section className="eventbrite--section--3">
        <div className="eventbrite--section--3-titles">
          <span className="eventbrite--section--3-titles--1">
            Eventos populares en
          </span>
          <span className="eventbrite--section--3--div">{cityElements}</span>
        </div>
      </section>
      <section className="eventbrite--section--4">
        <div className="eventbrite--nav--notlinks">
          <span
            className={`eventbrite--section--4--a ${
              displayedEvents.all && "active"
            }`}
            onClick={() =>
              setDisplayedEvents({
                ...displayedEvents,
                all: true,
                online: false,
                presenciales: false,
              })
            }
          >
            Todos
          </span>
          <span
            className={`eventbrite--section--4--a ${
              displayedEvents.online && "active"
            }`}
            onClick={() => {
              setDisplayedEvents({
                ...displayedEvents,
                all: false,
                online: true,
                presenciales: false,
              });
            }}
          >
            Online
          </span>
          <span
            className={`eventbrite--section--4--a ${
              displayedEvents.presenciales && "active"
            }`}
            onClick={() => {
              setDisplayedEvents({
                ...displayedEvents,
                online: false,
                all: false,
                presenciales: true,
              });
            }}
          >
            Presenciales
          </span>
        </div>
      </section>
      <section className="eventbrite--section--4">
        <h3 className="eventbrite--section--4--h3">
          Eventos en {cityText.length ? cityText : "..."}
        </h3>
        <div className="cards-list">
          {displayedEventsArray.map(function (element) {
            return <Card event={element} key={element.id} />;
          })}
        </div>
      </section>
    </div>
  );
}

// const [events, setEvents] = useState(allEvents);
// const [isLoading, setIsLoading] = useState(true);
// const [displayedEvents, setDisplayedEvents] = useState({
//   sanFran: true,
//   all: true,
//   online: false,
// });

// let madridEvents = [];
// let madridEventsOnline = [];
// let madridEventsPresenciales = [];
// for (let event of events) {
//   if (event.end.timezone === "Europe/Madrid") {
//     madridEvents.push(event);
//   }
// }
// for (let event of events) {
//   if (event.end.timezone === "Europe/Madrid" && event.online_event === true) {
//     madridEventsOnline.push(event);
//   } else if (
//     event.end.timezone === "Europe/Madrid" &&
//     event.online_event === false
//   ) {
//     madridEventsPresenciales.push(event);
//   }
// }

// let sanFranEvents = [];
// let sanFranEventsOnline = [];
// let sanFranEventsPresenciales = [];
// for (let event of events) {
//   if (event.end.timezone === "America/Los_Angeles") {
//     sanFranEvents.push(event);
//   }
// }

// for (let event of events) {
//   if (
//     event.end.timezone === "America/Los_Angeles" &&
//     event.online_event === true
//   ) {
//     sanFranEventsOnline.push(event);
//   } else if (
//     event.end.timezone === "America/Los_Angeles" &&
//     event.online_event === false
//   ) {
//     sanFranEventsPresenciales.push(event);
//   }
// }

// let eventElements;

// if (displayedEvents.sanFran) {
//   if (displayedEvents.all) {
//     eventElements = sanFranEvents.map(function (element) {
//       return <Card event={element} key={element.id} />;
//     });
//   } else if (!displayedEvents.all && displayedEvents.online) {
//     eventElements = sanFranEventsOnline.map(function (element) {
//       return <Card event={element} key={element.id} />;
//     });
//     if (eventElements.length === 0) {
//       eventElements = (
//         <div className="eventbrite--section--4--card--empty">
//           <div>No hay eventos disponibles para esta selección...</div>
//         </div>
//       );
//     }
//   } else {
//     eventElements = sanFranEventsPresenciales.map(function (element) {
//       return <Card event={element} key={element.id} />;
//     });
//   }
// } else if (!displayedEvents.sanFran) {
//   if (displayedEvents.all) {
//     eventElements = madridEvents.map(function (element) {
//       return <Card event={element} key={element.id} />;
//     });
//   } else if (displayedEvents.online && !displayedEvents.all) {
//     eventElements = madridEventsOnline.map(function (element) {
//       return <Card event={element} key={element.id} />;
//     });
//   } else {
//     eventElements = madridEventsPresenciales.map(function (element) {
//       return <Card event={element} key={element.id} />;
//     });
//   }
// }

//  <span
//               className= */
//               {`
//               "eventbrite--section--3-titles--2"
//               ${
//                 displayedEvents.sanFran && "eventbrite--titles--active"
//               }`}
//               onClick={() => {
//                 setDisplayedEvents({ ...displayedEvents, sanFran: true });
//               }}
//             >
//               San Francisco
//             </span>{" "}
//             <span
//               className=
//               {`
//               "eventbrite--section--3-titles--2"
//               ${
//                 !displayedEvents.sanFran && "eventbrite--titles--active"
//               }`}
//               onClick={() => {
//                 setDisplayedEvents({ ...displayedEvents, sanFran: false });
//               }}
//             >
//               Madrid
//             </span> */}

// useEffect(() => {
//   if (allEvents.length) {
//     let venuesIds = getVenuesIds(allEvents);

//     for (let id of venuesIds) {
//       if (!allVenues.length >= length) {
//         dispatch(getVenues(id));
//       }
//     }
//   }
// }, [dispatch, allEvents, allVenues]);

// useEffect(
//   function () {
//     if (allVenues.length) {
//       const citiesArray = getCities(allVenues);
//       setCities(citiesArray);
//       setDisplayedEvents(createStateObject(citiesArray));
//       setCitiesObject(displayedEvents.cities);
//     }

//     setCityElements(
//       cities.map(function (element) {
//         let formatedName = formatName(element);
//         return (
//           <City
//             name={element}
//             key={displayedEvents.cities[formatedName]}
//             displaying={displayedEvents}
//           />
//         );
//       })
//     );
//     if (!objIsEmpty(citiesObject)) {
//       setCityText(formatNameInversed(checkTrueCity(citiesObject)));
//     }
//   },
//   [dispatch, allVenues, allEvents]
// );
