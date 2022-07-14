import axios from "axios";
const  getProfileDetails = ()=>{
   return  axios.get('landscapes.json')
    .then(response => {
        console.log(response.data)
        return response.data;
    })}

 export {getProfileDetails};   