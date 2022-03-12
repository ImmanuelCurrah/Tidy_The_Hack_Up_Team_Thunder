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
    errorHandler(error, "");
  }
};

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem("AuthToken");
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.get("auth/verify");
      return response.data;
    }
  } catch (error) {
    errorHandler(
      error,
      "Could not verify the current user trying to access the data, sorry"
    );
  }
};
