import {useEffect, useState} from "react"
import {Routes, Route, NavLink} from "react-router-dom"
import {allEvents} from "../../services/routes/event-controller"
import EventAdd from "./AddEvent/EventAdd"
import EventDetails from "./EventDetails/EventDetails"
import EventEdit from "./EditEvent/EventEdit"

export default function Events(props) {
  const {currentUser} = props
  const [events, setEvents] = useState(["clean sidewalk", "test"])
  useEffect(() => {
    const getAll = async () => {
      const res = await allEvents()
      setEvents(res)
    }
    getAll()
  }, [])
  return (
    <div className="text-xl row text-center">
      <h2 className="text-3xl">Events</h2>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center">
              {events &&
                events.map((e, i) => {
                  return (
                    <div className="w-52 h-32 bg-emerald-700 p-8 mb-0.5 rounded-2xl text-emerald-100" key={i}>
                      <NavLink to={`details/${e.id}`}>{e.name}</NavLink>
                    </div>
                  )
                })}
              <div className="bg-emerald-700 p-2 rounded-full text-emerald-100">
                <NavLink to={"add"}>Add Event</NavLink>
              </div>
            </div>
          }
        />
        <Route
          path={"details/:id"}
          element={
            <div>
              <EventDetails currentUser={props.currentUser} events={events}></EventDetails>
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
        <Route path={`edit/:event_id`} element={<EventEdit currentUser={currentUser} />} />
      </Routes>
    </div>
  )
}
