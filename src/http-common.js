import axios from "axios";

export default axios.create({
  baseURL: "http://laravel-first-try.epizy.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
