import React from 'react';
import classTags from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

    return (

      <div className = {classTags.all_items}>
        <ProfileInfo />
        <MyPostsContainer  />
        </div>
    );
}

export default Profile;