import "./App.css"
import Layout from "./Components/Layout/Layout"
import {Routes, Route, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import Home from "./Screens/Home"
import Signup from "./Screens/Signup"
import Login from "./Screens/Login"
import {verifyUser} from "./services/routes/auth-config"
import Events from "./Screens/Events/Events"

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
      <Layout currentUser={currentUser}>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/Events/*" element={<Events currentUser={currentUser} />} />
          <Route path="/user-information" element={<Events currentUser={currentUser} />} />
=======
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route
            path="/signup"
            element={<Signup setCurrentUser={setCurrentUser} />}
          />
          <Route
            path="/login"
            element={<Login setCurrentUser={setCurrentUser} />}
          />
          <Route
            path="/Events/*"
            element={<Events currentUser={currentUser} />}
          />
>>>>>>> 698dde246a63704a119d8c95cb116798929fbd31
        </Routes>
      </Layout>
    </div>
  )
}

export default App
