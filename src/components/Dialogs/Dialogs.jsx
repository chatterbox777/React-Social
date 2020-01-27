import React from "react";
import classTags from "./Dialogs.module.css";
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import Message from '../Dialogs/Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";






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


let addNewMessage = (values) => {
 props.sendMessage (values.newMessageBody)
}

if (!props.isAuth) return <Redirect to = {'/Login'} />;

  return (
    <div className={classTags.dialogs}>
      <div className={classTags.dialogs_items}>

      { dialogsElements }

      </div>
      <div className={classTags.messages}>

<div>{messagesElement}</div>
  
      </div>
      <AddMessageFormRedux onSubmit = {addNewMessage} />
      
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}> 
  <div><button>Add message</button></div>
      <div>
        <Field component = 'textarea' name = 'newMessageBody' placeholder = 'Enter your message' />
       
        
        </div>
  </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
