import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/routes/user-config";

export default function SignUpForm(props) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState({
    confirmedPassword: "",
  });
  const { setCurrentUser } = props;
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const confirmingPassword = (e) => {
    const { id, value } = e.target;
    setConfirmPassword((prevPassword) => ({ ...prevPassword, [id]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = await registerUser(input);
    console.log(newUser);
    setCurrentUser(newUser);
    navigate("/");
  };

  return (
    <div>
      {confirmPassword.confirmedPassword !== input.password && (
        <div>Passwords must match!</div>
      )}
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          id="name"
          value={input.name}
          required
          autoFocus
          onChange={changeHandler}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          id="email"
          value={input.email}
          required
          onChange={changeHandler}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={input.password}
          required
          onChange={changeHandler}
        />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          id="confirmedPassword"
          value={confirmPassword.confirmedPassword}
          required
          onChange={confirmingPassword}
        />
        <br />
        <button>Sign On!</button>
      </form>
    </div>
  );
}
