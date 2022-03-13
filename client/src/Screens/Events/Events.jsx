import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { allEvents } from "../../services/routes/event-controller";
import EventAdd from "./AddEvent/EventAdd";
import EventDetails from "./EventDetails/EventDetails";
export default function Events(props) {
  const { currentUser } = props;
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
              {events && events.map((e, i) => {
                return <div key={i}>
                  <NavLink to={`details/${e.id}`}>{e.name}</NavLink>
                </div>
                })}
                <NavLink to={"add"}>Add Event</NavLink>
            </div>
          }
        />
        <Route
          path={"details/:id"}
          element={
            <div>
              <EventDetails events={events}></EventDetails>
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