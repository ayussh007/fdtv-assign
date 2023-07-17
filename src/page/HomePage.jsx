import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import ProfileBottom from "../components/ProfileBottom";
import TopNav from "../components/TopNav";
import { MyAppContext } from "../contestApi/ContestProvider";
import style from "../css/homepage.module.css";

const HomePage = () => {
  const { profileData, fetchFilteredData, setProfileVisibility, isProfileVisible } =
    useContext(MyAppContext); 
  const { id } = useParams();
  sessionStorage.setItem("id", id);

  useEffect(() => {
    let ID = sessionStorage.getItem("id") || 1;
    fetchFilteredData(ID);
  }, [id]);

  return (
    <div>
      <div className={style.HomeMain}>
        <LeftNav />
        
        {profileData &&
          profileData.map((el) => (
            <div
              style={{ width: "80%" }}
              className={style.profile_top}
              key={el.id}
            >
        
              <div className={style.profile}>
                <h2>Profile</h2>
                <TopNav />
              </div>

              <hr />
              <div onClick={() => setProfileVisibility(false)}>
                <ProfileBottom {...el} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
