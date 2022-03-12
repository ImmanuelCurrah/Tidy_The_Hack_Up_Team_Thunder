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

export const registerUser = async (registerData) => {
  try {
    const response = await api.post(`users`, {
      user: registerData,
    });
    localStorage.setItem("AuthToken", response.data.token);
    localStorage.setItem("username", response.data.user.name);
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
    return response.data.user;
  } catch (error) {
    errorHandler(error, "could not register your account at this time, sorry");
  }
};
