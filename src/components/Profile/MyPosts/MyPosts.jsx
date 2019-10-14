import React from "react";
import classTags from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

   let postsElement = 
      props.posts.map ( post => <Post message ={post.message} likeCount = {post.likeCount} /> );
 
   let newPostElement = React.createRef();
   
   let addPost = () => {
      debugger;
      let text = newPostElement.current.value;
      props.addPost(text);
   }

   return (
      <div>
         <div className={classTags.item}> <h3>My Posts</h3></div>
         <div className={classTags.item}>
            <div>
               <textarea ref = {newPostElement}></textarea>
            </div>
            <div>
               <button onClick = { addPost }>Add post</button>
            </div>

         </div>
         <div className={classTags.Posts}>
         { postsElement }
         </div>
      </div>
   );
};

export default MyPosts;
