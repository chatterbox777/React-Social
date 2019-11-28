import React from "react";
import classTags from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";






const DialogsContainer = (props) => {


let addMessageElement = React.createRef();

let addMessage = () => {
   let message = addMessageElement.current.value;
   alert(message);
}

let state = props.store.getState().dialogsPage;


let onSendMessageClick = () => {
props.store.dispatch(sendMessageCreator())
}
let onNewMessageChange = (body) => {
 
  props.store.dispatch(updateNewMessageBodyCreator(body))
}

  return <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage = {onSendMessageClick} dialogsPage = {state} /> 
};

export default DialogsContainer;
