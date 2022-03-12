import React from 'react'

export default function EventDetails(props) {
  const { eventId, events } = props;

  return (
    <div>
      Event Details
      <h1>{events[eventId]}</h1>
    </div>
  )
}
