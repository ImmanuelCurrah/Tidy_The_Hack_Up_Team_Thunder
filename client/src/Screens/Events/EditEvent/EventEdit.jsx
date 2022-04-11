import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import EventForm from "../../../Components/EventForm/EventForm"
import {editEvent, getEvent} from "../../../services/routes/event-controller"

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
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await getEvent(event_id)
      setEvent(response)
    }
    fetchEvent()
    // eslint-disable-next-line
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    const {id, value} = e.target
    setEvent((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await editEvent(event_id, event)
    navigate("/Events")
  }

  return (
    <div>
      <EventForm event={event} handleChange={handleChange} onSubmit={onSubmit} title="Edit" />
    </div>
  )
}
