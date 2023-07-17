import React, { useContext, useEffect } from "react";
import { MyAppContext } from "../contestApi/ContestProvider";
import style from "../css/homepage.module.css";
import ProfileDetails from "../page/ProfileDetails";

const TopNav = () => {
  const { profileData, setProfileVisibility, isProfileVisible, fetchFilteredData} =
    useContext(MyAppContext); 

  useEffect(() => {
    const ID = sessionStorage.getItem("id") || 1;
    fetchFilteredData(Number(ID));
  }, []);

  return (
    <div>
      <div
        onClick={() => setProfileVisibility(!isProfileVisible)}
        className={style.profile}
      >
        <img src={profileData[0]?.profilepicture} alt="profile img" />
        <p>{profileData[0]?.name}</p>
      </div>
  
      <ProfileDetails />
    </div>
  );
};

export default TopNav;
