import axios from "axios";

export default function axiosWithAuth () {
  return axios.create({      
    baseURL: "https://workout-journal-backend.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};