import React from 'react'
import classTags from './like.module.css'


const Like = (props) => {
    return (
        <span className = {classTags.item}>Like's = {props.count} </span>
    );
}

export default Like;