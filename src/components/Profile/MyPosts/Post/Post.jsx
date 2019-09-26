import React from 'react';
import classTags from './Post.module.css'
import Like from './like.jsx'


const Post = (props) => {


    return (
     
           <div className = {classTags.item}>
           <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yqRDMWlrUS_JEfC9jr8VXV77QC1li-3UyIz8XDrMfIbfyA8uVg' />
             {props.message}
             <div>
      
             </div>
             
           </div> 
    );
}

export default Post;