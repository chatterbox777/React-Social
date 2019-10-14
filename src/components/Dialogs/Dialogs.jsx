import React from "react";
import classTags from "./Dialogs.module.css";
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import Message from '../Dialogs/Message/Message';






const Dialogs = (props) => {


let addMessageElement = React.createRef();

let addMessage = () => {
   let message = addMessageElement.current.value;
   alert(message);
}

let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id} url = {dialog.url} /> ); 


let messagesElement = props.state.messages.map ( message => <Message text = {message.message} /> );

  return (
    <div className={classTags.dialogs}>
      <div className={classTags.dialogs_items}>

      { dialogsElements }

      </div>
      <div className={classTags.messages}>

{messagesElement}

      </div>
      <div><button onClick = {addMessage}>Add message</button></div>
      <div><textarea ref= {addMessageElement}></textarea></div>
      
    </div>
  );
};

export default Dialogs;
