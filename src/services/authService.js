import axios from "axios";
import { AUTH_URL } from "../Config/ap.config";
import toast from "react-hot-toast";

class Auth {
  async login(payload) {
    let data = {};
    await axios
      .post(`${AUTH_URL}/login`, payload, { withCredentials: true })
      .then((res) => {
        toast.success(res.data?.message);
        data = res.data;
      })
      .catch((err) => {
        if (err?.response?.status === 401)
          return toast.error("incorrect username or password");
        else return toast.error(err?.response?.data?.msg);
      });
    return data;
  }

  async logout() {
    await axios
      .post(`${AUTH_URL}/logout`)
      .then((res) => {
        //toast.success("");
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(err?.response?.data?.msg);
      });
  }
}
export default new Auth();
