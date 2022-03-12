import React, { useState } from 'react'
import {Routes, Route, NavLink} from "react-router-dom"
import EventDetails from './EventDetails/EventDetails';
export default function Events() {
  const [eventId, setEventId] = useState(0);
  const [events, setEvents] = useState(["clean sidewalk", "test"]);
  return (
    <div id='Events'>Events
      <Routes>
        <Route path="/" element={<div>
          Home
          <br/>
          <NavLink to={`details/${eventId}`}>detail link</NavLink>
        </div>} />
        <Route path={`details/${eventId}`} element={<div><EventDetails eventId={eventId} events={events}></EventDetails>
        </div>} />
      </Routes>
    </div>
  )
}
