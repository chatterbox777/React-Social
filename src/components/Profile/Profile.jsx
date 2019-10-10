import React from 'react';
import classTags from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

  

    return (

      <div className = {classTags.all_items}>
        <ProfileInfo />
        <MyPosts posts = {props.posts} />
        </div>
    );
}

export default Profile;