import React, { useContext } from "react";
import LeftNav from "../components/LeftNav";
import TopNav from "../components/TopNav";
import { MyAppContext } from "../contestApi/ContestProvider";
import style from "../css/comingsoonpage.module.css"

const ToDo = () => {
  const { setProfileVisibility } = useContext(MyAppContext); 

  return (
    <div className={style.mainDiv}>
     
      <LeftNav />

      
      <div className={style.topDiv}>
        <div className={style.profile}>
          <h2>ToDo</h2>
          <TopNav />
        </div>

        <hr style ={{ color: "grey", width: "100%" }} />

        <div className={style.screen} onClick={() => setProfileVisibility(false)}>
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
