import { errorHandler } from "../../error/errorHandler";
import { api } from "../../api/api-config";

export const fetchAllUsers = async () => {
  try {
    const users = await api.get("users");
    return users.data;
  } catch (error) {
    errorHandler(error, "cannot get all users at this time");
  }
};
