import axios, { CanceledError} from "axios";


export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        //if we need to pass an api key in the request
    }
})
export {CanceledError} ;