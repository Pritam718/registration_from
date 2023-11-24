import axios from "axios";
import toast from "react-hot-toast";

class BaseApiService{

    _url='';

    constructor(url){
        this._url=url;
    }

    create(payload){
       
        axios.post(this._url,payload).then((res)=>{
            toast.success(res.data?.msg);
            return res.data;
        }).catch((err)=>{
            console.log(err?.response)
            toast.error(err?.response?.data?.msg);
        })
    
    }   
    
    getPost(){
         return  axios.get(this._url)
    }
    deletePost(id){
        const url=`${this._url}/${id}`;
        return axios.delete(url);
    }
    update(id,payload){
        const url=`${this._url}/${id}`;
        axios.put(url,payload).then((res)=>{
            toast.success(res.data?.msg);
            return res.data;
        }).catch((err)=>{
            console.log(err?.response)
            toast.error(err?.response?.data?.msg);
         
        });
    }
}

export default BaseApiService;