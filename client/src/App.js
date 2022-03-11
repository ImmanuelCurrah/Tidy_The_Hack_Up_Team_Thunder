import "./App.css";
import Layout from "./Components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
function App() {
  return <div className="App">
    <h1>Michael Abebe</h1>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Layout>
  </div>;
}

export default App;
