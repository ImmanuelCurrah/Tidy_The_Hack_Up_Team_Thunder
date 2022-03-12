import { useState } from "react";
import { loginUser } from "../../services/routes/auth-config";
import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setCurrentUser } = props;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const resp = await loginUser(user);
    setCurrentUser(resp);
    navigate("/");
  };

  return (
    <div>
      {user.password.length === 0 ? null : user.password.length < 6 ? (
        <div>password must be six digits long</div>
      ) : null}
      <form onSubmit={onSubmit}>
        <h4>Please Login</h4>
        <label>Email</label>
        <br />
        <input
          type="email"
          id="email"
          required
          autoFocus
          value={user.email}
          onChange={handleChange}
          placeholder="email"
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          id="password"
          required
          value={user.password}
          onChange={handleChange}
          placeholder="password"
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
