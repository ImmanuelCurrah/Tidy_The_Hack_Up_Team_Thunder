import {useState, useEffect} from "react"
import {fetchUserEvents} from "../../../../services/routes/user-config"

export default function UserEvents(props) {
  const [userEvents, setUserEvents] = useState([])
  console.log(props.currentUser)

  useEffect(() => {
    const getEvents = async () => {
      const resp = await fetchUserEvents(props.currentUser.id)
      setUserEvents(resp)
    }
    getEvents()
  }, [])

  console.log(userEvents)
  return <div>UserEvents</div>
}
