import React from "react";
import classTags from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";



const MyPosts = (props) => {

   let postsElement = 
      props.posts.map ( post => <Post message ={post.message} likeCount = {post.likeCount} /> );
 
   let newPostElement = React.createRef();
   
   let addPost = () => {
      // props.addPost ();
      props.dispatch(addPostActionCreator());
   }

   let onPostChange = () => {
      
      let text = newPostElement.current.value;
      // props.updateNewPostText(text);
      props.dispatch(updateNewPostTextActionCreator(text)); 
      
   };

   return (
      <div>
         <div className={classTags.item}> <h3>My Posts</h3></div>
         <div className={classTags.item}>
            <div>
               <textarea onChange = {onPostChange} ref = {newPostElement} 
                     value = {props.newPostText}/>
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
