import formatName from "../../utils/formatName";
import objIsEmpty from "../../utils/objIsEmpty";
import React, { useEffect, useState } from "react";
import checkTrueCity from "../../utils/checkTrueCity";

export default function City({ name, displaying, setDisplayedEvents }) {
  const [cityName, setCityName] = useState("");
  const [key, setKey] = useState("");
  const [active, setActive] = useState("");

  function handleClick() {
    setDisplayedEvents(function (oldValue) {
      return {
        ...oldValue,
        cities: { ...oldValue.cities, [key]: false, [cityName]: true },
      };
    });
  }

  useEffect(() => {
    if (!objIsEmpty(displaying)) {
      if (!objIsEmpty(displaying.cities)) {
        setKey(checkTrueCity(displaying.cities));
        setCityName(formatName(name));
        if (displaying.cities[cityName] === true) {
          setActive("eventbrite--titles--active");
        } else {
          setActive("");
        }
      }
    }
  }, [displaying]);

  useEffect(() => {}, [key]);

  return (
    <span
      className={`eventbrite--section--3-titles--2 ${active}`}
      onClick={handleClick}
    >
      {name}
    </span>
  );
}
