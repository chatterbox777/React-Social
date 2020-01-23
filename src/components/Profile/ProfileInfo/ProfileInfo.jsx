import React from "react";
import classTags from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

if (!props.profile) {
  return <Preloader />
}

  return (
    <div>
     {/*<div className={classTags.content_bg}>
        <img src="https://blog.allo.ua/wp-content/uploads/2019/06/Cyberpunk2077.jpg"></img>
      </div>  */}
      <div>
        <div className={`${classTags.item} ${classTags.active}`}>
          <img src= {props.profile.photos.large} /> <br/>
          <br/>
         <ProfileStatus aboutMe = {props.profile.aboutMe} status = {'Hello everybody'} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
