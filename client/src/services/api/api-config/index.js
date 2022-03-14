import axios from "axios"

const baseURL = process.env.NODE_ENV === "production" ? "https://elegant-lamport-79fb82.netlify.app/" : "http://localhost:3000/"

export const api = axios.create({
  baseURL,
})
