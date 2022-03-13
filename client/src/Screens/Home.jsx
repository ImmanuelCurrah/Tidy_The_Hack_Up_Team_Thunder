import { useState, useEffect } from "react";
import { allEvents } from "../services/routes/event-controller";
import { loginUser } from "../services/routes/auth-config";
import earth from "../assets/earth.png";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [guest, setGuest] = useState({
    email: "guest@guest.com",
    password: "test",
  });
  const { currentUser } = props;

  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      const events = await allEvents();
      setFeaturedEvents(events);
    };

    fetchFeaturedEvents();
  }, []);

  const guestLogin = async () => {
    await loginUser(guest);
    window.location.reload(false);
  };

  if (!featuredEvents) {
    return "Loading...";
  }

  return (
    <div>
      {currentUser ? (
        <div> {`Welcome back ${currentUser.name}`} </div>
      ) : (
        <div>
          <div>Welcome to Clean.ly</div>
          <Link to="/">Sign Up Here</Link>
          <div onClick={guestLogin}>Log in as a Guest</div>
          <br />
          <Link to="/about">Read about us</Link>
        </div>
      )}
      <img src={earth} alt="a purple earth" />
      <h2>Featured Events!</h2>
      {featuredEvents.slice(0, 5).map((event) => {
        return (
          <div key={event.id}>
            <div>-------</div>
            <div>{event.name}</div>
          </div>
        );
      })}
      <div>-------</div>
    </div>
  );
}
