import {useState} from "react"
import {loginUser} from "../services/routes/auth-config"
import {useNavigate} from "react-router-dom"

export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const {id, value} = e.target
    setUser((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const resp = await loginUser(user)
    props.setCurrentUser(resp)
    navigate("/")
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h4>Please Login</h4>
        <input type="email" id="email" value={user.email} onChange={handleChange} placeholder="email" />
        <br />
        <input type="password" id="password" value={user.password} onChange={handleChange} placeholder="password must be 6 digits long" />
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}
