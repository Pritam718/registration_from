import axios from "axios";
import { AUTH_URL } from "../../Config/ap.config";
import toast from "react-hot-toast";

export const checkAuth = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${AUTH_URL}/getuser`);
    if (data?.data) {
      dispatch({ type: "LOGIN", payload: data?.data });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  } catch (err) {
    dispatch({ type: "LOGOUT" });
  }
};
