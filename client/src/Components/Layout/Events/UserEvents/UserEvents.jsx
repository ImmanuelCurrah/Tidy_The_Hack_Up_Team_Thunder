import {useState, useEffect} from "react"
import {fetchUserEvents} from "../../../../services/routes/user-config"

export default function UserEvents(props) {
  const [userEvents, setUserEvents] = useState([])
  console.log(props.currentUser)
  useEffect(() => {
    const getEvents = async () => {
      const resp = setUserEvents(props.currentUser.id)
      fetchUserEvents(resp)
    }
    getEvents()
  }, [])

  console.log(userEvents)
  return <div>UserEvents</div>
}
