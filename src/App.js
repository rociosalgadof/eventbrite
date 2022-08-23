import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "./actions/events";
import Home from "./components/Home";
import Tickets from "./components/events/Tickets";
import Event from "./components/events/Event";

export default function App() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(getEvents());
    },
    [dispatch]
  );

  return (
    <div
      className="global--div"
      // style={styles}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets/:eventId" element={<Tickets />} />
        <Route path="/show/:eventId" element={<Event />} />
      </Routes>
    </div>
  );
}
