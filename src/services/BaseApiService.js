import axios from "axios";
import toast from "react-hot-toast";

class BaseApiService {
  _url = "";

  constructor(url) {
    this._url = url;
  }

  async create(payload) {
    let data = {};
    await axios
      .post(this._url, payload)
      .then((res) => {
        toast.success(res.data?.msg);
        data = res.data;
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(err?.response?.data?.msg);
      });
    return data;
  }

  async get() {
    let data = {};
    await axios
      .get(this._url)
      .then((res) => {
        data = res.data;
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(err?.response?.data?.msg);
      });
    return data;
  }
  async delete(id) {
    const url = `${this._url}/${id}`;
    await axios
      .delete(url)
      .then((res) => {
        toast.success(res.data?.msg);
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(err?.response?.data?.msg);
      });
  }
  async update(id, payload) {
    const url = `${this._url}/${id}`;
    let data = {};
    await axios
      .put(url, payload)
      .then((res) => {
        toast.success(res.data?.msg);
        data = res.data;
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(err?.response?.data?.msg);
      });
    return data;
  }
}

export default BaseApiService;
