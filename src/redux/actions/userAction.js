import { AUTH_URL } from "../../Config/ap.config";
import { axiosInit } from "../../services/axiosInit";

export const checkAuth = () => async (dispatch) => {
  try {
    const { data } = await axiosInit.get(`${AUTH_URL}/getuser`);
    if (data?.data) {
      dispatch({ type: "LOGIN", payload: data?.data });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  } catch (err) {
    dispatch({ type: "LOGOUT" });
  }
};
