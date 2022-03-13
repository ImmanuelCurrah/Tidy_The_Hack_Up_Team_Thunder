import { useParams } from 'react-router-dom';

export default function EventDetails(props) {
  const { events } = props;
  const { id } = useParams()
  console.log(events.filter((e) => Number(e.id) === Number(id)), id);

  const handleUpdate = (e) => {
    console.log("update");
  }

  const handleParticipate = (e) => {
    console.log("Participate");
  }
  return (
    <div>
      Event Details
      {events && events.filter((e) => Number(e.id) === Number(id)).map((e, i) => {
        return <div key={i}>
          <h1>Name:{e.name}</h1>
          <h1>Description:{e.description}</h1>
          <h1>Equiptment:{e.equipment}</h1>
          <h1>Donations:{e.donations}</h1>
          <h1>Minimum # of Participants:{e.participants_needed}</h1>
          <h1>Start:{e.start_date}</h1>
          <h1>End:{e.end_date}</h1>
          {e.img_url!==null && < h1 > Image:{e.img_url}</h1>}
          {e.location && <h1>Location:{e.location}</h1>}
          <button onClick={(e) => { e.preventDefault(); handleUpdate(e); }}>Update</button>
          <button onClick={(e) => { e.preventDefault(); handleParticipate(e); }}>Participate</button>
          </div>
      })}
    </div>
  )
}