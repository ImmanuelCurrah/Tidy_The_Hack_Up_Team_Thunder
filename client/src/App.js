import Events from "./Screens/Events/Events"
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { verifyUser } from "./services/routes/auth-config";

import Layout from "./Components/Layout/Layout";
import Home from "./Screens/Home";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";

import "./App.css";
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
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/Events/*" element={<Events currentUser={ currentUser}/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
