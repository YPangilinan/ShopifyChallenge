import axios from 'axios';
const queryURL = "http://www.omdbapi.com/?t=";
const APIKEY = "&apikey=aa19abbe";

export default{
    search: function(query){
        return axios.get(queryURL + query + APIKEY)
    }
}