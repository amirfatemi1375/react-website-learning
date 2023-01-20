import axios from "axios";
const SERVER_URL="https://jsonplaceholder.typicode.com";
export const getAll=(url)=>{
return axios.get(`${SERVER_URL}/${url}`);
}
export const get=(url,id)=>{
    return axios.get(`${SERVER_URL}/${url}/${id}`);
    
    }
    export const getQuery=(url,query)=>{
        return axios.get(`${SERVER_URL}/${url}`,{params:query});
       
     }
     export const post=(url,data)=>{
        return axios.post(`${SERVER_URL}/${url}`,data);
       
     }
     export const put=(url,data,id)=>{
        return axios.put(`${SERVER_URL}/${url}/${id}`,data);
       
     }
     export const remove=(url,id)=>{
        return axios.delete(`${SERVER_URL}/${url}/${id}`);
       
     }