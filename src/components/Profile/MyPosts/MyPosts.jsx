import React from "react";
import classTags from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

   let postsElement = 
      props.posts.map ( post => <Post message ={post.message} likeCount = {post.likeCount} /> );
 

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
         { postsElement }
         </div>
      </div>
   );
};

export default MyPosts;
