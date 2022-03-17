import {useState} from "react"
import {useParams} from "react-router-dom"
import {addParticipant} from "../../../services/routes/event-controller"

export default function EventDetails(props) {
  const {events, currentUser} = props
  const {id} = useParams()
  console.log(id)
  const [handleComment, setHandleComment] = useState(false)
  console.log(
    events.filter((e) => Number(e.id) === Number(id)),
    id
  )

  const handleUpdate = (e) => {
    console.log("update")
  }

  const handleParticipate = async () => {
    const participant = await addParticipant(currentUser.id, id)
    console.log(participant)
  }
  return (
    <div>
      Event Details
      {events &&
        events
          .filter((e) => Number(e.id) === Number(id))
          .map((e, i) => {
            return (
              <div className="flex flex-col items-center" key={i}>
                <h2 className="bg-emerald-500 p-2 rounded-full text-emerald-100">Name:{e.name}</h2>
                {e.img_url !== null && <img src={e.img_url} alt={e.name} />}
                <div className="bg-emerald-500 mt-2 p-2 rounded-[22px]">
                  <h2 className="text-emerald-100">Description:{e.description}</h2>
                  <h2 className="text-emerald-100">Start:{e.start_date}</h2>
                  <h2 className="text-emerald-100">End:{e.end_date}</h2>
                  <h2 className="text-emerald-100">Equiptment:{e.equipment}</h2>
                  <h2 className="text-emerald-100">Donations:{e.donations}</h2>
                  <h2 className="text-emerald-100">Minimum # of Participants:{e.participants_needed}</h2>
                  {e.location && <h1>Location:{e.location}</h1>}
                </div>
                <div className="bg-emerald-500 mt-2 p-8 rounded-[28px]">
                  <h3>Organizer: User{e.user_id}</h3>
                </div>
                <div className="flex flex-row px-4">
                  <button
                    className="bg-emerald-800 my-2 rounded-md text-emerald-100 p-1"
                    onClick={(e) => {
                      e.preventDefault()
                      setHandleComment((prev) => !prev)
                    }}
                  >
                    Comment
                  </button>
                  <button
                    className="bg-emerald-800 my-2 rounded-md text-emerald-100 p-1"
                    onClick={(e) => {
                      e.preventDefault()
                    }}
                  >
                    Donate
                  </button>
                </div>
                {handleComment && (
                  <div className="bg-emerald-500 mt-2 p-8 rounded-full">
                    <h3>Comment Section</h3>
                    <input></input>
                    <button className="bg-emerald-800 mx-2 rounded-md text-emerald-100 p-1">Edit</button>
                    <button className="bg-emerald-800 mx-2 rounded-md text-emerald-100 p-1">Delete</button>
                  </div>
                )}
                <button
                  className="bg-emerald-800 my-2 rounded-md text-emerald-100 p-1"
                  onClick={(e) => {
                    e.preventDefault()
                    handleUpdate(e)
                  }}
                >
                  Update
                </button>
                <button
                  className="bg-emerald-800 my-2 rounded-md text-emerald-100 p-1"
                  onClick={(e) => {
                    e.preventDefault()
                    handleParticipate(e)
                  }}
                >
                  Participate
                </button>
              </div>
            )
          })}
    </div>
  )
}
