import { useState, useEffect } from "react";
import { allEvents } from "../services/routes/event-controller";
import earth from "../assets/earth.png";
import { useNavigate } from "react-router-dom";

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
    if (!currentUser) {
      navigate("/signup");
    } else {
      fetchFeaturedEvents();
    }
  }, []);

  return (
    <div>
      {currentUser ? <div> {`Welcome back ${currentUser.name}`} </div> : null}
      <img src={earth} alt="a purple earth" />
      <h2>Featured Events!</h2>
      {featuredEvents.map((event) => {
        return (
          <div key={event.id}>
            <div>-------</div>
            <div>{event.name}</div>
            <div>-------</div>
          </div>
        );
      })}
    </div>
  );
}
