import "./App.css"
import Layout from "./Components/Layout/Layout"
import {Routes, Route, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import Home from "./Screens/Home"
import Signup from "./Screens/Signup"
import Login from "./Screens/Login"
import {verifyUser} from "./services/routes/auth-config"
import Events from "./Screens/Events/Events"
import ShowUserEvents from "./Components/ShowUserEvents/ShowUserEvents"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    }
    getUser()
  }, [])

  const logout = () => {
    localStorage.removeItem("AuthToken")
    setCurrentUser(null)
    navigate("/")
  }

  return (
    <div className="font-ubuntu">
      <Layout currentUser={currentUser} logout={logout}>
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/Events/*" element={<Events currentUser={currentUser} />} />
          <Route path="/user-information/*" element={<ShowUserEvents />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
