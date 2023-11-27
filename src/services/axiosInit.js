import axios from "axios";

export const axiosInit = axios.create({
  withCredentials: true,
});
