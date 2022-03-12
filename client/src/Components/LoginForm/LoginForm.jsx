import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/routes/auth-config";

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
    <section
      className="flex flex-col items-center m-8 space-y-3"
    >
      <h2
        className="text-2xl text-emerald-1000"
      >
        Login!
      </h2>

      {/* Login Form */}
      <form
        id="login"
        name="login"
        onSubmit={onSubmit}
        className="text-lg text-center p-2 font-noto-display bg-emerald-500 flex flex-col items-center text-emerald-1000
        rounded-2xl"
      >
        {/* Email input */}
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
            name="email"
            required
            autoFocus
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3"
          />
        </div>

        {/* Password Input */}
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
            required
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
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
          Login
        </button>
      </form>
      {user.password.length === 0 ? null : user.password.length < 6 ? (
        <p
          className="text-lg text-rose-500"
        >
          Passwords must be six characters long.
        </p>
      ) : null}
    </section>
  );
}
