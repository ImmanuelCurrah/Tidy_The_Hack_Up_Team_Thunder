import { useState, useEffect } from "react";
import { allEvents } from "../services/routes/event-controller";
import earth from "../assets/earth.png";
import { Link, useNavigate } from "react-router-dom";

export default function Home(props) {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const { currentUser } = props;
  const navigate = useNavigate();
  console.log(featuredEvents);

  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      const events = await allEvents();
      setFeaturedEvents(events);
    };

    fetchFeaturedEvents();
  }, []);

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
