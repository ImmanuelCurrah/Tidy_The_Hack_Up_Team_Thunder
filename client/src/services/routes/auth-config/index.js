import { api } from "../../api/api-config";
import { errorHandler } from "../../error/errorHandler";

export const loginUser = async (loginData) => {
  try {
    const response = await api.post("auth/login", {
      authentication: loginData,
    });
    localStorage.setItem("AuthToken", response.data.token);
    localStorage.setItem("username", response.data.user.name);
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
    return response.data.user;
  } catch (error) {
    errorHandler(error, "Could not login user at this time, sorry");
  }
};
