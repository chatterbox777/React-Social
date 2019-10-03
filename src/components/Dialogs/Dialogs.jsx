import React from "react";
import classTags from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import { ADDRGETNETWORKPARAMS } from "dns";


const DialogItem = (props) => {

    return (
        <div className={classTags.dialog + ' ' + classTags.active}>
        <NavLink to = {'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={classTags.message}>
             {props.text}
        </div>
    );
};




const Dialogs = (props) => {

let dialogs = [
  {id: 1, name: 'Artyom'}, 
  {id: 2, name: 'Vasiliy'},
  {id: 3, name: 'Dmitriy'},
  {id: 4, name: 'Nik'}
]

let messages = [
  {id: 1, message: 'Hey'}, 
  {id: 2, message: 'WazzUPPP'},
  {id: 3, message: 'nothing interesting , AND YOU?'},
  {id: 4, message: 'IM TOOOOO'}
]

let dialogsElements = dialogs.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id} /> ); 


let messagesElement = messages.map ( message => <Message text = {message.message} /> );

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
