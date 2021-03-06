import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import {addParticipant, showEventParticipants} from "../../../services/routes/event-controller"

export default function EventDetails(props) {
  const {events, currentUser} = props
  const {id} = useParams()
  const [participants, setParticipants] = useState()
  const navigate = useNavigate()
  const [handleComment, setHandleComment] = useState(false)

  let participantId = participants?.filter((participant) => participant?.user_id === currentUser?.id)

  // console.log(
  //   events.filter((e) => Number(e.id) === Number(id)),
  //   id
  // )

  useEffect(() => {
    const fetchAllParticipants = async () => {
      const response = await showEventParticipants(id)
      setParticipants(response)
    }
    fetchAllParticipants()
  }, [])

  const handleUpdate = () => {
    navigate(`/Events/edit/${id}`)
  }
  const handleParticipate = async () => {
    await addParticipant(currentUser.id, id)
    alert("You have registered for this event")
    window.location.reload(false)
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
                {participantId.length == 0 ? (
                  <button
                    className="bg-emerald-800 my-2 rounded-md text-emerald-100 p-1"
                    onClick={(e) => {
                      e.preventDefault()
                      handleParticipate(e)
                    }}
                  >
                    Enroll for this event
                  </button>
                ) : (
                  <button>Unregister from this event</button>
                )}
              </div>
            )
          })}
      <p>{`Participants Enrolled: ${participants?.length}`}</p>
      {/* {participants &&
        participants.map((participant, index) => {
          return (
            <div key={index}>
              <p>{`${index + 1}- ${participant.user_name}`}</p>
            </div>
          )
        })} */}
      {participants?.length == 0 ? (
        <div>
          <p>There Are no participants Enrolled</p>
        </div>
      ) : (
        participants?.map((participant, index) => {
          return (
            <div key={index}>
              <p>{`${index + 1}- ${participant.user_name}`}</p>
            </div>
          )
        })
      )}
    </div>
  )
}
