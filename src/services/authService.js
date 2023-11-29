import axios from "axios";
import { AUTH_URL } from "../Config/ap.config";
import toast from "react-hot-toast";
import { axiosInit } from "./axiosInit";

class Auth {
  async login(payload) {
    let data = {};
    await axiosInit
      .post(`${AUTH_URL}/login`, payload)
      .then((res) => {
        toast.success(res.data?.message);
        data = res.data;
      })
      .catch((err) => {
        if (err?.response?.status === 401)
          return toast.error("incorrect username or password");
        else return toast.error(err?.response?.data?.message);
      });
    return data;
  }

  async logout() {
    await axiosInit
      .post(`${AUTH_URL}/logout`)
      .then((res) => {
        //toast.success("");
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(err?.response?.data?.message);
      });
  }
}
export default new Auth();
