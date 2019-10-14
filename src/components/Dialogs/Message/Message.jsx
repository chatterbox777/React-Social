import React from "react";
import classTags from "./../Dialogs.module.css";
  




const Message = (props) => {
    return (
        <div className={classTags.message}>
             {props.text}
        </div>
       
    );
};



export default Message;
