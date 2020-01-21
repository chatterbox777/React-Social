import React from "react";
import classTags from "./Dialogs.module.css";
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import Message from '../Dialogs/Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import { Redirect } from "react-router-dom";






const Dialogs = (props) => {


let addMessageElement = React.createRef();

let addMessage = () => {
   let message = addMessageElement.current.value;
   alert(message);
}

let state = props.dialogsPage;

let dialogsElements = state.dialogs.map( dialog => <DialogItem name = {dialog.name} key = {dialog.id} id = {dialog.id} url = {dialog.url} /> ); 


let messagesElement = state.messages.map ( message => <Message text = {message.message} key = {message.id} /> );

let newMessageBody = state.newMessageBody;

let onSendMessageClick = () => {
  props.sendMessage();
}
let onNewMessageChange = (e) => {
  let body = e.target.value;
  props.updateNewMessageBody(body);
}

if (!props.isAuth === false) return <Redirect to = {'/Login'} />;

  return (
    <div className={classTags.dialogs}>
      <div className={classTags.dialogs_items}>

      { dialogsElements }

      </div>
      <div className={classTags.messages}>

<div>{messagesElement}</div>
  <div> 
  <div><button onClick = {onSendMessageClick}>Add message</button></div>
      <div><textarea value = {newMessageBody} onChange ={onNewMessageChange} placeholder = 'Enter your message'></textarea></div>
  </div>
      </div>
      
      
    </div>
  );
};

export default Dialogs;
