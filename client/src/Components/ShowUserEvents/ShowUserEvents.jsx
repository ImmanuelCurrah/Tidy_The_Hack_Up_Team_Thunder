import {useState, useEffect} from "react"
import {fetchUserEvents} from "../../services/routes/user-config"
import {verifyUser} from "../../services/routes/auth-config"
import UnregisterButton from "../UnregisterButton"

export default function ShowUserEvents() {
  const [userEvents, setUserEvents] = useState()

  useEffect(() => {
    const getEvents = async () => {
      const user = await verifyUser()
      if (user) {
        const resp = await fetchUserEvents(user.id)
        setUserEvents(resp)
        console.log(resp)
      }
    }
    getEvents()
  }, [])

  if (!userEvents) {
    return "Loading"
  }

  const handleUnregister = async (e) => {
    e.preventDefault()
  }

  return userEvents.map((events, index) => {
    return (
      <div key={index}>
        <p>{events.name}</p>
        <p>{events.description}</p>
        <UnregisterButton handleUnregister={handleUnregister} id={events.id} />
      </div>
    )
  })
}
