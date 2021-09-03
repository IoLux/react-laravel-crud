import axios from "axios";

export default axios.create({
  baseURL: "https://laravel-first-try.epizy.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
