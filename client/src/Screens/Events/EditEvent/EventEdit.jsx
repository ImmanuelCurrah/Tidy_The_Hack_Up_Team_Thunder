import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import EventForm from "../../../Components/EventForm/EventForm"
import {getEvent} from "../../../services/routes/event-controller"

export default function EventEdit(props) {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    equipment: "",
    start_date: "",
    end_date: "",
    donations: 0,
    location: "",
    img_url: "",
    user_id: props?.currentUser?.id,
    participants_needed: 0,
  })
  const {event_id} = useParams()

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await getEvent(event_id)
      setEvent(response)
    }
    fetchEvent()
  }, [])

  return (
    <div>
      <EventForm event={event} />
    </div>
  )
}
