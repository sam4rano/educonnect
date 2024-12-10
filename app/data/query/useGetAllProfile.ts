// Custom hook definition (fetchAllUser)
import { api } from "@/app/api/api";
import axios from "axios";

export const fetchAllUser = async () => {
  const response = await axios.get(`${api.profile.allProfile}`);
  
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }

  return response.data;  // Return data from the response
};
