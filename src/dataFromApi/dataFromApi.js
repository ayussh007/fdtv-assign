import axios from "axios";

// get data for the user profile
export const getUserProfile = () => {
return axios.get("https://panorbit.in/api/users.json");
};