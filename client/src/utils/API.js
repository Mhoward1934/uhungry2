import axios from "axios";

const BASEURL = "https://api.yummly.com/v1/api/recipes?_app_id=";
const BASEURL2 = "_app_key="
const ID = process.env.REACT_APP_API_ID;
const KEY = process.env.REACT_APP_API_KEY;

export default {
  search: function(query) {
    //console.log(ID, KEY)
    return axios.get(BASEURL + ID + BASEURL2 + KEY + query);
  },
  
};


