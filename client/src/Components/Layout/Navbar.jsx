import {NavLink, Link} from "react-router-dom"

export default function Navbar() {
  return (
    <header className="p-3 sticky top-0 z-50 flex items-center justify-center sm:justify-around bg-emerald-500 space-x-6">
      <Link to={"/"}>
        <h1 className="text-5xl sm:text-6xl text-emerald-100">Clean.ly</h1>
      </Link>
      <nav>
        {/* Buger menu will go here */}
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Events"}>Events</NavLink>
        <NavLink to={"/signup"}>Signup</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/user-information"}>User Information</NavLink>
      </nav>
    </header>
  )
}
