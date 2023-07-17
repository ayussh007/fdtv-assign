import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GetProfiles from "../components/GetProfiles";
import { MyAppContext } from "../contestApi/ContestProvider";
import style from "../css/profiledetails.module.css";

const ProfileDetails = () => {
  const { profileData, setProfileVisibility, isProfileVisible} = useContext(MyAppContext); 

  const handleClick = () => {
    setProfileVisibility(false);
    sessionStorage.clear("id");
  };

  return (
    <div
      className={style.MainDiv}
      style={{ display: isProfileVisible ? "block" : "none" }}
    >
      <div className={style.profile}>
        <img src={profileData[0]?.profilepicture} alt="profile" />
        <p>{profileData[0]?.name}</p>
        <p>{profileData[0]?.email}</p>
      </div>
      <hr />
    
      <div className={style.getProfile} onClick={() => setProfileVisibility(false)}>
        <GetProfiles />
      </div>

      <Link to="/">
        <button onClick={handleClick} className={style.signout_button}>
          Sign out
        </button>
      </Link>
    </div>
  );
};

export default ProfileDetails;
