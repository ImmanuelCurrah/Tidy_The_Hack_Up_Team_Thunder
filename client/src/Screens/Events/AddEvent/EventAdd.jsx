import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import {createEvent} from "../../../services/routes/event-controller"

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
        <section className="flex flex-col items-center m-8 space-y-3">
          <form
            onSubmit={onSubmit}
            className="text-lg text-center p-2 font-noto-display bg-emerald-500 flex flex-col items-center text-emerald-1000
        rounded-2xl"
          >
            <div className="text-emerald-1000">
              <label className="block">Name of Event</label>
              <input type="string" id="name" value={event.name} onChange={handleChange} required autoFocus className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
              <label className="block">Description</label>
              <textarea type="string" id="description" value={event.description} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
              <label className="block">Equipment Needed</label>
              <textarea type="string" id="equipment" value={event.equipment} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
              <label className="block">Donations Needed</label>
              <input type="number" id="donations" value={event.donations} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
              <label className="block">Participants Needed</label>
              <input type="number" id="participants_needed" value={event.participants_needed} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
              <label className="block">Location</label>
              <input type="string" id="location" value={event.location} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
              <label className="block">Image for Post</label>
              <input type="string" id="img_url" value={event.img_url} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
              <label className="block">Start Date</label>
              <input type="date" id="start_date" value={event.start_date} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
              <label className="block">End Date</label>
              <input type="date" id="end_date" value={event.end_date} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
            </div>
            <button
              className="bg-emerald-700 text-emerald-100 hover:text-emerald-50 hover:bg-emerald-600
          hover:-translate-y-0.5 transform transition
          focus:outline-none focus:ring focus:ring-offset-2 focus:ring-emerald-300 focus:ring-opacity-50
          active:text-emerald-200 active:bg-emerald-800 rounded-2xl py-2 px-6 my-6"
            >
              Add
            </button>
          </form>
        </section>
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
