import axios from "axios";

export default axios.create({
  baseURL: "http://laravel-react-api.test/api",
  headers: {
    "Content-type": "application/json",
  },
});
