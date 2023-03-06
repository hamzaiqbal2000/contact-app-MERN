import axios from "axios";

export default function fetchData(){
    return axios.get(`https://dummyjson.com/users`)
        .then(res => res)
        .catch(err => console.log(err))
}