import React from "react";
import classTags from "./MyPosts.module.css";
import Post from "./Post/Post";
import Like from "./Post/like.jsx";

const MyPosts = () => {

   let posts = [
      {id: 1, message: "Hello, bitch, why are you  alive?" , likeCounts: 22}, 
      {id: 2, message: "Sorry, its not adress to you", likeCounts: 33}
      
    ];


   let postsElement = posts.map ( post => <Post message ={post.message} likeCounts ={post.likeCounts}/> );


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
