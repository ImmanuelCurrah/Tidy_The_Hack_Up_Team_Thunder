import {errorHandler} from "../../error/errorHandler"
import {api} from "../../api/api-config"

export const fetchAllUsers = async () => {
  try {
    const users = await api.get("users")
    return users.data
  } catch (error) {
    errorHandler(error, "cannot get all users at this time")
  }
}

export const registerUser = async (registerData) => {
  try {
    const response = await api.post(`users`, {
      user: registerData,
    })
    localStorage.setItem("AuthToken", response.data.token)
    localStorage.setItem("username", response.data.user.name)
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
    return response.data.user
  } catch (error) {
    errorHandler(error, "could not register your account at this time, sorry")
  }
}

export const fetchUserEvents = async (user_id) => {
  try {
    const response = await api.get(`users/${user_id}/events`)
    return response.data
  } catch (error) {
    errorHandler(error, "Could not get users events")
  }
}

export const signupForEvent = async (user_id, event_id) => {
  try {
    const response = await api.post(`users/${user_id}/events/${event_id}`)
    return response.data
  } catch (error) {
    errorHandler(error, "Could not sign up for this event")
  }
}

export const unregisterEvent = async (user_id, event_id) => {
  try {
    await api.delete(`/${user_id}/${event_id}/unregister`)
  } catch (error) {
    errorHandler(error, "Could not unregister from this event")
  }
}
