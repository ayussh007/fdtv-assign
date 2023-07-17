import React, { useState } from "react";
import { createContext } from "react";
import { getUserProfile } from "../dataFromApi/dataFromApi";

export const MyAppContext = createContext();
const MyContextProvider = ({ children }) => {
// profile visibility
const [isProfileVisible, setProfileVisibility] = useState(false);

const [profileData, setProfileData] = useState([]);
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

//Fetching data from API 
const getAllData = () => {
setLoading(true);
setError(false);
getUserProfile()
.then((res) => {
setData(res.data.users);
setLoading(false);
setError(false);
})
.catch((e) => {
setLoading(false);
setError(true);
});
};

// Fetching filtered data with param id
const fetchFilteredData = (id) => {
  getUserProfile()
.then((res) => {
setProfileData(res.data.users.filter((el) => el.id === Number(id)));
})
.catch((e) => {
console.log(e);
});
};

return (
<MyAppContext.Provider
value={{
data,
profileData,
fetchFilteredData,
loading,
error,
getAllData,
setProfileVisibility,
isProfileVisible,
}}
>
{children}
</MyAppContext.Provider>
);
};

export default MyContextProvider;