import React from "react";
import classTags from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


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
  return (
    <div className={classTags.dialogs}>
      <div className={classTags.dialogs_items}>
      <DialogItem name = 'Artem' id = '1' />
      <DialogItem name = 'Vasya' id = '2' />
      <DialogItem name = 'Dima' id = '3' />
      <DialogItem name = 'Nikita' id = '4' />
      </div>
      <div className={classTags.messages}>
        <Message text = 'Hi' />
        <Message text = 'How are you?' />
        <Message text = 'Yo' />
      </div>
    </div>
  );
};

export default Dialogs;
