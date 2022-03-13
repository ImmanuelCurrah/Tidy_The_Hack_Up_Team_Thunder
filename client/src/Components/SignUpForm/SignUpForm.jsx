import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/routes/user-config";

export default function SignUpForm(props) {
  const [input, setInput] = useState({
    name: "",
    img_url: "",
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
    <section
      className="flex flex-col items-center m-8 space-y-3"
    >
      <h2
        className="text-2xl text-emerald-1000"
      >
        Sign Up!
      </h2>

      {/* Sign Up Form */}
      <form
        id="register"
        name="register"
        onSubmit={onSubmit}
        className="text-lg text-center p-2 font-noto-display bg-emerald-500 flex flex-col items-center text-emerald-1000
        rounded-2xl"
      >
        {/* User Name */}
        <div
          className="text-emerald-1000"
        >
          <label
            htmlFor="name"
            className="block"
          >
            Username
          </label>
          <input
            type="text"
            id="name"
            value={input.name}
            required
            autoFocus
            onChange={changeHandler}
            placeholder="Username"
            className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3"
          />
        </div>

        {/* Avatar URL */}
        <div
          className="text-emerald-1000"
        >
          <label
            htmlFor="img_url"
            className="block"
          >
            Avatar Url
          </label>
          <input
            type="text"
            id="img_url"
            value={input.img_url}
            required
            onChange={changeHandler}
            placeholder="Avatar Url"
            className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3"
          />
        </div>

        {/* Email */}
        <div
          className="text-emerald-1000"
        >
          <label
            htmlFor="email"
            className="block"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={input.email}
            required
            onChange={changeHandler}
            placeholder="Email"
            className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3"
          />
        </div>

        {/* Password */}
        <div
          className="text-emerald-1000"
        >
          <label
            htmlFor="password"
            className="block"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={input.password}
            required
            onChange={changeHandler}
            placeholder="Password"
            className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3"
          />
        </div>

        {/* Confirm Password */}
        <div
          className="text-emerald-1000"
        >
          <label
            htmlFor="confirmedPassword"
            className="block"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmedPassword"
            value={confirmPassword.confirmedPassword}
            required
            onChange={confirmingPassword}
            placeholder="Confirm Password"
            className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3"
          />
        </div>

        {/* Submit Button */}
        <button
          id="submit"
          type="submit"
          className="bg-emerald-700 text-emerald-100 hover:text-emerald-50 hover:bg-emerald-600
          hover:-translate-y-0.5 transform transition
          focus:outline-none focus:ring focus:ring-offset-2 focus:ring-emerald-300 focus:ring-opacity-50
          active:text-emerald-200 active:bg-emerald-800 rounded-2xl py-2 px-6 my-6"
        >
          Join
        </button>
      </form>

      {/* Password Match User Notifications */}
      {confirmPassword.confirmedPassword !== input.password && confirmPassword.confirmedPassword !== "" && (
        <p
          className="text-lg text-rose-500"
        >
          Passwords must match.
        </p>
      )}

      {confirmPassword.confirmedPassword == input.password && confirmPassword.confirmedPassword !== "" && (
        <p
          className="text-lg text-indigo-500"
        >
          Passwords match!
        </p>
      )}
    </section>
  );
}
