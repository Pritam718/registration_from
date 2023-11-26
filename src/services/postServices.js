//import axios from "axios";
//import toast from "react-hot-toast";
import BaseApiService from "./BaseApiService";
import { STUDENT_URL } from "../Config/ap.config";

class Post extends BaseApiService {
  constructor() {
    console.log(STUDENT_URL);
    super(STUDENT_URL);
  }
}
export default new Post();
