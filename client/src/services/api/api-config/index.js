import axios from "axios";

// const baseURL =
//   process.env.NODE_ENV === "production"
//     ? "https://team-thunder-cleanly.herokuapp.com"
//     : "http://localhost:3000";
const baseURL = "https://team-thunder-cleanly.herokuapp.com";

export const api = axios.create({
  baseURL,
});
