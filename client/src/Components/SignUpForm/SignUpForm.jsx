import { useState } from "react";

export default function SignUpForm(props) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState({
    confirmedPassword: "",
  });
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const { setCurrentUser } = props;

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

  const onSubmit = (e) => {};

  return (
    <div>
      {toggleConfirm && <div>here</div>}
      <form>
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
