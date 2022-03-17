import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import {createEvent} from "../../../services/routes/event-controller"
import EventForm from "../../../Components/EventForm/EventForm"
export default function EventAdd(props) {
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

  const navigate = useNavigate()

  const handleChange = (e) => {
    const {id, value} = e.target
    setEvent((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await createEvent(event)
    navigate("/Events")
  }

  return (
    <div>
      {props.currentUser ? (
        <EventForm onSubmit={onSubmit} handleChange={handleChange} event={event} title="Add" />
      ) : (
        <div className="flex flex-row justify-center">
          <h4>Please login</h4>
          <Link className="mx-1 text-emerald-500" to="/login">
            here
          </Link>
        </div>
      )}
    </div>
  )
}
