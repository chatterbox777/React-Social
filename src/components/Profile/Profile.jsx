import React from 'react';
import classTags from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
      <div className = {classTags.all_items}>
        <div className = {classTags.content_bg}>
          <img src = 'https://blog.allo.ua/wp-content/uploads/2019/06/Cyberpunk2077.jpg'></img>
        </div>
        <div>
        <div className = {`${classTags.item} ${classTags.active}`}>
         ava + description
        </div>
        <MyPosts />
          </div>
        </div>
    );
}

export default Profile;