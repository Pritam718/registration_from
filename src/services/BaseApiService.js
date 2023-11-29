import axios from "axios";
import toast from "react-hot-toast";
import { axiosInit } from "./axiosInit";

class BaseApiService {
  _url = "";

  constructor(url) {
    this._url = url;
  }

  async create(payload) {
    let data = {};
    await axiosInit
      .post(this._url, payload)
      .then((res) => {
        toast.success(res.data?.message);
        data = res.data;
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(err?.response?.data?.message);
      });
    return data;
  }

  async get() {
    let data = {};
    await axiosInit
      .get(this._url)
      .then((res) => {
        data = res.data;
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(err?.response?.data?.message);
      });
    return data;
  }
  async delete(id) {
    const url = `${this._url}/${id}`;
    await axiosInit
      .delete(url)
      .then((res) => {
        toast.success(res.data?.message);
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(err?.response?.data?.message);
      });
  }
  async update(id, payload) {
    const url = `${this._url}/${id}`;
    let data = {};
    await axiosInit
      .put(url, payload)
      .then((res) => {
        toast.success(res.data?.message);
        data = res.data;
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(err?.response?.data?.message);
      });
    return data;
  }
}

export default BaseApiService;
