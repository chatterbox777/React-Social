import React from "react";
import classTags from "./MyPosts.module.css";
import Post from "./Post/Post";
import Like from "./Post/like.jsx";

const MyPosts = () => {
   return (
      <div>
         <div className={classTags.item}> <h3>My Posts</h3></div>
         <div className={classTags.item}>
            <div>
               <textarea ></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>

         </div>
         <div className={classTags.Posts}>
            <Post message="Hello, bitch, why are you  alive?" />
            <Like count="37" />
            <Post message="Sorry, its not adress to you" />
            <Like count="20" />
         </div>
      </div>
   );
};

export default MyPosts;
