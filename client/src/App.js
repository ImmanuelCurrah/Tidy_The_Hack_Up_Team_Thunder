import "./App.css";
import Layout from "./Components/Layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Screens/Home";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import { verifyUser } from "./services/routes/auth-config";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    };
    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("AuthToken");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
