import React from "react";
import classTags from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";



const MyPosts = (props) => {

   let postsElement = 
      props.posts.map ( post => <Post message ={post.message} likeCount = {post.likeCount} /> );
 
   let newPostElement = React.createRef();
   
   let onAddPost = (values) => {
      props.addPost (values.newPostText);
      
   }

   

   return (
      <div>
         <div className={classTags.item}> <h3>My Posts</h3></div>
         
      <AddNewPostReduxForm onSubmit = {onAddPost}/>

         <div className={classTags.Posts}>
         { postsElement }
         </div>
      </div>
   );
};

const AddNewPostForm = (props) => {
   return (
      <form onSubmit = {props.handleSubmit} className={classTags.item}>
            <div>
               <Field  name = 'newPostText' component = 'textarea' />
               
            </div>
            <div>
               <button>Add post</button>
            </div>

         </form>
   )
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;
