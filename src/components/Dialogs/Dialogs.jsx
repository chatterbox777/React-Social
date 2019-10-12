import React from "react";
import classTags from "./Dialogs.module.css";
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import Message from '../Dialogs/Message/Message';






const Dialogs = (props) => {




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
    </div>
  );
};

export default Dialogs;
