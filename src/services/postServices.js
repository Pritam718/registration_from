//import axios from "axios";
//import toast from "react-hot-toast";
import BaseApiService from "./BaseApiService";
import { STUDENT_URL } from "../Config/ap.config";



class Post extends BaseApiService{

    constructor(){
        console.log(STUDENT_URL)
        super(STUDENT_URL);
    }

    // create(formData){
       
    //         const url=`${base_url}`;
        
    //         axios.post(url,formData).then((res)=>{
    //             toast.success(res.data?.msg);
    //             return res.data;
    //         }).catch((err)=>{
    //             console.log(err?.response)
    //             toast.error(err?.response?.data?.msg);
             
    //         })
        
        
    // }
    // getPost(){
    //     const url=`${base_url}`;
    //     return axios.get(url);
    // }
    // deletePost(id){
    //     const url=`${base_url}/${id}`;
    //     return axios.delete(url);
    // }
    // update(id,payload){
    //     const url=`${base_url}/${id}`;
    //     axios.put(url,payload).then((res)=>{
    //         toast.success(res.data?.msg);
    //         return res.data;
    //     }).catch((err)=>{
    //         console.log(err?.response)
    //         toast.error(err?.response?.data?.msg);
         
    //     });
    // }
}
export default new Post();