import React from "react";
import classTags from "./Dialogs.module.css";
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import Message from '../Dialogs/Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";






const Dialogs = (props) => {


let addMessageElement = React.createRef();

let addMessage = () => {
   let message = addMessageElement.current.value;
   alert(message);
}

let state = props.store.getState().dialogsPage;

let dialogsElements = state.dialogs.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id} url = {dialog.url} /> ); 


let messagesElement = state.messages.map ( message => <Message text = {message.message} /> );

let newMessageBody = state.newMessageBody;

let onSendMessageClick = () => {
props.store.dispatch(sendMessageCreator())
}
let onNewMessageChange = (e) => {
  let body = e.target.value;
  props.store.dispatch(updateNewMessageBodyCreator(body))
}

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
