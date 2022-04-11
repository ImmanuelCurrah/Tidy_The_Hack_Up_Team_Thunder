import {useState, useEffect} from "react"
import {fetchUserEvents, unregisterEvent} from "../../services/routes/user-config"
import {verifyUser} from "../../services/routes/auth-config"
import UnregisterButton from "../UnregisterButton"

export default function ShowUserEvents() {
  const [userEvents, setUserEvents] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    const getEvents = async () => {
      const user = await verifyUser()
      if (user) {
        const resp = await fetchUserEvents(user.id)
        setUserEvents(resp)
        setUser(user)
        console.log(resp)
        console.log(user)
      }
    }
    getEvents()
  }, [])

  if (!userEvents) {
    return "Loading"
  }

  const handleUnregister = async (e, user_id, event_id) => {
    e.preventDefault()
    await unregisterEvent(user_id, event_id)
    alert("You have unregistered from this event")
    window.location.reload(false)
  }

  return userEvents.map((events, index) => {
    return (
      <div key={index}>
        <p>{events.name}</p>
        <p>{events.description}</p>
        <UnregisterButton handleUnregister={handleUnregister} event_id={events.id} user_id={user?.id} />
      </div>
    )
  })
}
