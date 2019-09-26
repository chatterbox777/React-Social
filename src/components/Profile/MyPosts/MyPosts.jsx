import React from 'react';
import classTags from './MyPosts.module.css'
import Post from './Post/Post'
import Like from './Post/like.jsx'


const MyPosts = () => {
    return (
      <div><div className = {classTags.item}> 
           My Posts
        </div>
        <div className = {classTags.item}>
           New post
        </div>
        <div className = {classTags.Posts}>
           <Post message = 'Hello, bitch, why are you  alive?' />
           <Like count = '37' />
           <Post message = 'Sorry, its not adress to you' />
           <Like count = '20' />
          </div>
          </div>
        
    );
}

export default MyPosts;