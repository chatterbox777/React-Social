import React from 'react'
import classTags from './like.module.css'


const Like = (props) => {
    return (
        <div><span className = {classTags.item}> Like's = {props.likeCount} </span></div>
        
    );
}

export default Like;