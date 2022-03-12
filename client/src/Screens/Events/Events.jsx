import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { allEvents } from "../../services/routes/event-controller";
import EventAdd from "./AddEvent/EventAdd";
import EventDetails from "./EventDetails/EventDetails";
export default function Events(props) {
  const { currentUser } = props;
  const [eventId, setEventId] = useState(0);
  const [events, setEvents] = useState(["clean sidewalk", "test"]);
  useEffect(() => {
    const getAll = async () => {
      const res = await allEvents();
      console.log(res);
      setEvents(res);
    }
    getAll();
  },[])
  return (
    <div id="Events">
      Events
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Home
              <br />
              <NavLink to={`details/${eventId}`}>detail link</NavLink>
              <NavLink to={"add"}>Add Event</NavLink>
            </div>
          }
        />
        <Route
          path={`details/${eventId}`}
          element={
            <div>
              <EventDetails eventId={eventId} events={events}></EventDetails>
            </div>
          }
        />
        <Route
          path={"add"}
          element={
            <div>
              <EventAdd currentUser={currentUser} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}
