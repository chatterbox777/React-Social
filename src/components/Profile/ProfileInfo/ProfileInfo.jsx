import React from "react";
import classTags from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classTags.content_bg}>
        <img src="https://blog.allo.ua/wp-content/uploads/2019/06/Cyberpunk2077.jpg"></img>
      </div>
      <div>
        <div className={`${classTags.item} ${classTags.active}`}>
          ava + description
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
