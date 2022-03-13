import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createEvent } from "../../../services/routes/event-controller";

export default function EventAdd(props) {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    equiptment: "",
    start_date: "",
    end_date: "",
    donations: 0,
    location: "",
    img_url: "",
    user_id: props?.currentUser?.id,
    participants_needed: 0,
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setEvent((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleEvent = async (e) => {
    e.preventDefault();
    console.log(event);
    const resp = await createEvent(event);
    // props.setCurrentUser(resp)
    navigate("/Events");
  };

  return (
    <div>
      {props.currentUser ? (
        <form onSubmit={handleEvent}>
          <input
            type="string"
            id="name"
            value={event.name}
            onChange={handleChange}
            placeholder="name"
          />
          <br />
          <textarea
            type="string"
            id="description"
            value={event.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <br />
          <textarea
            type="string"
            id="equiptment"
            value={event.equiptment}
            onChange={handleChange}
            placeholder="Equipment"
          />
          <br />
          <input
            type="number"
            id="donations"
            value={event.donations}
            onChange={handleChange}
            placeholder="Donation"
          />
          <br />
          <textarea
            type="string"
            id="location"
            value={event.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <br />
          <textarea
            type="string"
            id="img_url"
            value={event.img_url}
            onChange={handleChange}
            placeholder="Image Url"
          />
          <br />
          <button>Add</button>
        </form>
      ) : (
        <div className="flex flex-row justify-center">
          <h4>Please login</h4>
          <Link className="mx-1 text-emerald-500" to="/login">
            here
          </Link>
        </div>
      )}
    </div>
  );
}
