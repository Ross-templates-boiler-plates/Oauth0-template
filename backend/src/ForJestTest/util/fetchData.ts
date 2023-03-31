import axios from "axios";

export const fetchData = () => {
  console.log("Fetching data...");
  return axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.data;
    });
};
