import {useState, useEffect} from "react"
import {allEvents} from "../services/routes/event-controller"
import {loginUser} from "../services/routes/auth-config"
import earth from "../../src/assets/earth.png"
import {Link} from "react-router-dom"

export default function Home(props) {
  const [featuredEvents, setFeaturedEvents] = useState([])
  const [guest, setGuest] = useState({
    email: "guest@guest.com",
    password: "test",
  })
  const {currentUser} = props

  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      const events = await allEvents()
      setFeaturedEvents(events)
    }

    fetchFeaturedEvents()
  }, [])

  const guestLogin = async () => {
    await loginUser(guest)
    window.location.reload(false)
  }

  if (!featuredEvents) {
    return "Loading..."
  }

  return (
    <div className="flex flex-col items-center ">
      {currentUser ? (
        <div className="mb-2 text-3xl">{`Welcome back ${currentUser.name}`} </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="mb-2 text-3xl">Welcome to Clean.ly</div>
          <div>
            <Link className="bg-emerald-700 p-2 rounded-full text-emerald-100" to="/signup">
              Sign Up
            </Link>
            <Link className="bg-emerald-700 p-2 rounded-full text-emerald-100" to="/login">
              Login
            </Link>
          </div>

          <div className="bg-emerald-700 flex flex-col p-2 m-2 rounded-full text-emerald-100" onClick={guestLogin}>
            Log in as a Guest
          </div>
          <br />
        </div>
      )}
      <div className="h-32 bg-emerald-500 rounded-2xl flex flex-row items-center mx-4 px-4">Clean.ly is a place for people to come together and protect places that matter.</div>
      <img className="w-60 p-8" src={earth} alt="a purple earth" />
      <div className="h-32 bg-emerald-500 rounded-2xl flex flex-row items-center mx-4 px-4">Make an event, invite your friends and do something good for your favorite park or stream!</div>
      <h2 className="mb-2 text-3xl m-4">Top 10 Featured Events!</h2>
      <div className="w-80 bg-emerald-500 p-8 rounded-2xl flex flex-row overflow-y-auto">
        {featuredEvents.slice(0, 10).map((event) => {
          return (
            <div className="p-8 bg-emerald-100 m-2 rounded-2xl" key={event.id}>
              <Link to={`/Events/details/${event.id}`}>{event.name}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
