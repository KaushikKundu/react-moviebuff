import axios from "axios";

const APIKEY = "f623b71d";
const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=f623b71d"

export const fetchMovies = async () => {
    try{
        const response = await axios.get(apiurl);
        return response.data;
    }
    catch(err){
        throw new Error("error:" + err.message);
    }
}
