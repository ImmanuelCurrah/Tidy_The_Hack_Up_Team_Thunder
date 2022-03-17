import {api} from "../../api/api-config"
import {errorHandler} from "../../error/errorHandler"

export const allEvents = async () => {
  try {
    const response = await api.get("/events")
    return response.data
  } catch (error) {
    errorHandler(error, "Could not return events at this time. Please try agian later.")
  }
}

export const getEvent = async (event_id) => {
  try {
    const response = await api.get(`/events/${event_id}`)
    return response.data
  } catch (error) {
    errorHandler(error, "Could not get event data")
  }
}

export const createEvent = async (eventParams) => {
  try {
    const response = await api.post("/events", {event: {...eventParams}})
    return response.data
  } catch (error) {
    errorHandler(error, "Could not return events at this time. Please try agian later.")
  }
}

export const editEvent = async (event_id, eventParams) => {
  try {
    const response = await api.put(`/events/${event_id}`, {event: {...eventParams}})
    return response.data
  } catch (error) {
    errorHandler(error, "Could not update changes to this event")
  }
}

export const addParticipant = async (user_id, event_id) => {
  try {
    const response = await api.post(`/${user_id}/${event_id}`)
    return response.data
  } catch (error) {
    errorHandler(error, "Could not create participant")
  }
}

export const showEventParticipants = async (event_id) => {
  try {
    const response = await api.get(`/${event_id}/participants`)
    return response.data
  } catch (error) {
    errorHandler(error, "Could not get this events participants")
  }
}
