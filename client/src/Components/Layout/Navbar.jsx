import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar(props) {
  const [toggleBurger, setToggleBurger] = useState(false);
  const { currentUser } = props;

  const toggleMenu = () => {
    setToggleBurger((prevToggle) => !prevToggle);
  };

  return (
    <header className="p-3 sticky top-0 z-50 flex items-center justify-center sm:justify-around bg-emerald-500 space-x-32 static">
      <Link to={"/"}>
        <h1 className="text-5xl sm:text-6xl text-emerald-100">Clean.ly</h1>
      </Link>
      <nav className="space-x-3">
        <div onClick={toggleMenu} className="flex flex-col items-center">
          <div className="w-10 h-1 bg-emerald-900 my-1"></div>
          <div className="w-10 h-1 bg-emerald-900 my-1"></div>
          <div className="w-10 h-1 bg-emerald-900 my-1"></div>
        </div>
        {toggleBurger && (
          <div className="absolute bg-emerald-700 text-emerald-100 p-8 rounded-2xl right-0 flex flex-col items-center m-4 px-4">
            <NavLink onClick={toggleMenu} to={"/"}>
              Home
            </NavLink>
            <br />
            <NavLink onClick={toggleMenu} to={"/Events"}>
              Events
            </NavLink>
            <br />
            <NavLink onClick={toggleMenu} to={"/signup"}>
              Sign Up
            </NavLink>
            <br />
            <NavLink onClick={toggleMenu} to={"/login"}>
              Login
            </NavLink>
            <br />
            <NavLink onClick={toggleMenu} to={"/user-information"}>
              User Information
            </NavLink>
          </div>
        )}
        {currentUser && (
          <div
            onClick={() => {
              props.logout();
            }}
          >
            Logout
          </div>
        )}
      </nav>
    </header>
  );
}
