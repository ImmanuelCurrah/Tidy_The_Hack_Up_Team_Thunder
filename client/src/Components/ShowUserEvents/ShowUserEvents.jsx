import {useState, useEffect} from "react"
import {fetchUserEvents} from "../../services/routes/user-config"
import {verifyUser} from "../../services/routes/auth-config"

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

  return <div>UserEvents</div>
}
