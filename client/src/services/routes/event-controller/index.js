import { api } from "../../api/api-config";
import { errorHandler } from "../../error/errorHandler";
export const allEvents = async () => {
  try {
    const response = await api.get("/events");
    return response.data;
  } catch (error) {
    errorHandler(error, "Could not return events at this time. Please try agian later.");
  }
};

export const createEvent = async (eventParams,uid) => {
  try {
    const response = await api.post("/events",{event:{eventParams},id:{uid}});
    return response.data;
  } catch (error) {
    errorHandler(error, "Could not return events at this time. Please try agian later.");
  }
};