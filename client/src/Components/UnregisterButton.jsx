export default function UnregisterButton(props) {
  const {user_id, event_id, handleUnregister} = props

  return <button onclick={() => handleUnregister(e, user_id, event_id)}>Unregister from Event</button>
}
