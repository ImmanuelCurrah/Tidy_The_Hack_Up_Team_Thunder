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

export const createEvent = async (eventParams) => {
  try {
    const response = await api.post("/events", {event: {...eventParams}})
    return response.data
  } catch (error) {
    errorHandler(error, "Could not return events at this time. Please try agian later.")
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
